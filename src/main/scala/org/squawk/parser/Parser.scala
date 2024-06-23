package org.squawk
package parser

import tokens._
import ast._

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
        
      case _ =>
        parseExpression(tokens).flatMap { case (expr, remainingTokens) =>
          remainingTokens match {
            case Semicolon :: rest => Right((ExpressionStmt(expr), rest))
            case _ => Left("Expected ';' after expression")
          }
        }
    }
  }

  private def parseExpression(tokens: List[Token]): Either[String, (Expression, List[Token])] = {
    tokens match {
      case Number(num) :: remainingTokens => Right((NumberLiteralExpr(num), remainingTokens))
      case Identifier(name) :: remainingTokens => Right((IdentifierExpr(name), remainingTokens))
      case True :: remainingTokens => Right((BooleanLiteralExpr(true), remainingTokens))
      case False :: remainingTokens => Right((BooleanLiteralExpr(false), remainingTokens))
      case _ => Left("Unsupported expression")
    }
  }
}