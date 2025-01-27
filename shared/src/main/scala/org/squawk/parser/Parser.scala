package org.squawk
package parser

import tokens.*
import ast.*
import Precedence.*

import scala.annotation.tailrec

object Parser {
  def parse(tokens: List[Token]): Either[String, Program] = {
    parseProgram(tokens).map(_._1)
  }

  private def parseProgram(tokens: List[Token]): Either[String, (Program, List[Token])] = {
    parseStatements(tokens).map { case (statements, remainingTokens) =>
      (Program(statements), remainingTokens)
    }
  }

  private def parseStatements(tokens: List[Token]): Either[String, (List[Statement], List[Token])] = {
    var remainingTokens = tokens
    var statements = List.empty[Statement]

    while (remainingTokens.nonEmpty && remainingTokens.head != CloseBracket) {
      parseStatement(remainingTokens) match {
        case Right((statement, rest)) =>
          statements ::= statement
          remainingTokens = rest
        case Left(error) => return Left(error)
      }
    }
    Right((statements.reverse, remainingTokens))
  }

  private def parseStatement(tokens: List[Token]): Either[String, (Statement, List[Token])] = {
    tokens match {
      case Let :: Identifier(name) :: Assign :: rest =>
        parseExpression(rest).flatMap { case (expr, afterExpr) =>
          afterExpr match {
            case Semicolon :: remainingTokens =>
              Right((LetStmt(IdentifierExpr(name), expr), remainingTokens))
            case _ => Left(s"Expected ';' after let statement near: ${showNearbyTokens(afterExpr)}")
          }
        }

      case Return :: rest =>
        parseExpression(rest).flatMap { case (expr, afterExpr) =>
          afterExpr match {
            case Semicolon :: remainingTokens =>
              Right(ReturnStmt(expr), remainingTokens)
            case _ => Left(s"Expected ';' after return statement near: ${showNearbyTokens(afterExpr)}")
          }
        }

      case Function :: Identifier(name) :: OpenParen :: rest =>
        parseFunctionDeclaration(name, rest)

      case _ =>
        parseExpression(tokens).flatMap { case (expr, remainingTokens) =>
          remainingTokens match {
            case Semicolon :: rest => Right((ExpressionStmt(expr), rest))
            case _ => Left(s"Expected ';' after expression near: ${showNearbyTokens(remainingTokens)}")
          }
        }
    }
  }

  private def parseExpression(tokens: List[Token], precedence: Int = LOWEST): Either[String, (Expression, List[Token])] = {
    tokens.headOption match {
      case Some(token) =>
        parsePrimaryExpression(token, tokens.tail).flatMap { case (leftExpr, remainingTokens) =>
          parseInfixExpression(leftExpr, remainingTokens, precedence)
        }

      case None => Left("Unexpected end of tokens")
    }
  }

  private def parsePrimaryExpression(token: Token, tokens: List[Token]): Either[String, (Expression, List[Token])] = {
    token match {
      case Number(num) => Right((NumberLiteralExpr(num), tokens))
      case Identifier(name) =>
        if (tokens.headOption.contains(OpenParen)) {
          parseFunctionCall(IdentifierExpr(name), tokens.tail)
        } else {
          Right((IdentifierExpr(name), tokens))
        }
      case True => Right((BooleanLiteralExpr(true), tokens))
      case False => Right((BooleanLiteralExpr(false), tokens))
      case OpenParen =>
        parseExpression(tokens).flatMap { case (expr, afterExpr) =>
          afterExpr match {
            case CloseParen :: remainingTokens =>
              Right((expr, remainingTokens))
            case _ => Left(s"Expected ')' after expression near: ${showNearbyTokens(afterExpr)}")
          }
        }
      case Minus =>
        parseExpression(tokens).map { case (expr, remainingTokens) =>
          (UnaryExpr(Minus, expr), remainingTokens)
        }
      case _ => Left(s"Unsupported expression near: ${showNearbyTokens(tokens)}")
    }
  }

  private def parseFunctionCall(function: Expression, tokens: List[Token]): Either[String, (Expression, List[Token])] = {
    def parseArguments(tokens: List[Token], args: List[Expression] = Nil): Either[String, (List[Expression], List[Token])] = {
      tokens match {
        case CloseParen :: rest => Right((args, rest))
        case Comma :: rest => parseArguments(rest, args)
        case _ =>
          parseExpression(tokens).flatMap { case (arg, rest) =>
            parseArguments(rest, args :+ arg)
          }
      }
    }

    parseArguments(tokens).map { case (args, remainingTokens) =>
      (FunctionCallExpr(function, args), remainingTokens)
    }
  }

  private def parseInfixExpression(leftExpr: Expression, tokens: List[Token], precedence: Int): Either[String, (Expression, List[Token])] = {
    var currentTokens = tokens
    var left = leftExpr

    while (currentTokens.nonEmpty && precedence < getPrecedence(currentTokens.head)) {
      currentTokens.head match {
        case Plus | Minus | Asterisk | Slash | Equal | NotEqual | LessThan | GreaterThan =>
          parseBinaryExpression(left, currentTokens).map { case (newLeft, newTokens) =>
            left = newLeft
            currentTokens = newTokens
          }
        case OpenParen =>
          parseFunctionCall(left, currentTokens.tail).map { case (newLeft, newTokens) =>
            left = newLeft
            currentTokens = newTokens
          }
        case _ =>
          return Right((left, currentTokens))
      }
    }

    Right((left, currentTokens))
  }

  private def parseBinaryExpression(left: Expression, tokens: List[Token]): Either[String, (Expression, List[Token])] = {
    val operator = tokens.head
    val precedence = getPrecedence(operator)
    val rightTokens = tokens.tail

    parseExpression(rightTokens, precedence).map { case (right, remainingTokens) =>
      (BinaryExpr(operator, left, right), remainingTokens)
    }
  }

  private def parseFunctionDeclaration(name: String, tokens: List[Token]): Either[String, (FunctionDeclarationStmt, List[Token])] = {
    @tailrec
    def parseParameters(tokens: List[Token], params: List[IdentifierExpr] = Nil): Either[String, (List[IdentifierExpr], List[Token])] = {
      tokens match {
        case Identifier(paramName) :: Comma :: rest =>
          parseParameters(rest, params :+ IdentifierExpr(paramName))
        case Identifier(paramName) :: CloseParen :: rest =>
          Right((params :+ IdentifierExpr(paramName), rest))
        case CloseParen :: rest =>
          Right((params, rest))
        case _ => Left(s"Expected parameter list near: ${showNearbyTokens(tokens)}")
      }
    }

    parseParameters(tokens).flatMap { case (params, remainingTokens) =>
      remainingTokens match {
        case OpenBracket :: rest =>
          parseStatements(rest).flatMap { case (statements, afterStatements) =>
            afterStatements match {
              case CloseBracket :: afterBlock =>
                Right((FunctionDeclarationStmt(IdentifierExpr(name), params, BlockStmt(statements)), afterBlock))
              case _ => Left(s"Expected '}' after function body near: ${showNearbyTokens(afterStatements)}")
            }
          }
        case _ => Left(s"Expected '{' after function parameters near: ${showNearbyTokens(remainingTokens)}")
      }
    }
  }

  private def getPrecedence(token: Token): Int = token match {
    case Equal | NotEqual => EQUALITY
    case LessThan | GreaterThan => COMPARE
    case Plus | Minus => SUM
    case Asterisk | Slash => PRODUCT
    case _ => LOWEST
  }

  private def showNearbyTokens(tokens: List[Token], count: Int = 5): String = {
    tokens.take(count).mkString(" ")
  }
}
