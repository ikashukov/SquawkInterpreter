package org.squawk
package parser

import tokens._
import ast._
import Precedence._

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
            case _ => Left("Expected ';' after let statement")
          }
        }

      case Return :: rest =>
        parseExpression(rest).flatMap { case (expr, afterExpr) =>
          afterExpr match {
            case Semicolon :: remainingTokens =>
              Right(ReturnStmt(expr), remainingTokens)
            case _ => Left("Expected ';' after return statement")
          }
        }

      case _ =>
        parseExpression(tokens).flatMap { case (expr, remainingTokens) =>
          remainingTokens match {
            case Semicolon :: rest => Right((ExpressionStmt(expr), rest))
            case _ => Left("Expected ';' after expression")
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
      case Identifier(name) => Right((IdentifierExpr(name), tokens))
      case True => Right((BooleanLiteralExpr(true), tokens))
      case False => Right((BooleanLiteralExpr(false), tokens))
      case OpenParen =>
        parseExpression(tokens).flatMap { case (expr, afterExpr) =>
          afterExpr match {
            case CloseParen :: remainingTokens =>
              Right((expr, remainingTokens))
            case _ => Left("Expected ')' after expression")
          }
        }
      case _ => Left("Unsupported expression")
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

  private def getPrecedence(token: Token): Int = token match {
    case Equal | NotEqual => EQUALITY
    case LessThan | GreaterThan => COMPARE
    case Plus | Minus => SUM
    case Asterisk | Slash => PRODUCT
    case _ => LOWEST
  }
}
