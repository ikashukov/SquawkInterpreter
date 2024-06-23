package org.squawk
package parser

import tokens._
import ast._

object Parser {
  def parse(tokens: List[Token]): Program = {
    val (program, _) = parseProgram(tokens)
    program
  }

  private def parseProgram(tokens: List[Token]): (Program, List[Token]) = {
    val (statements, remainingTokens) = parseStatements(tokens)
    (Program(statements), remainingTokens)
  }

  private def parseStatements(tokens: List[Token]): (List[Statement], List[Token]) = {
    var remainingTokens = tokens
    var statements = List.empty[Statement]

    while (remainingTokens.nonEmpty) {
      val (statement, rest) = parseStatement(remainingTokens)
      statements ::= statement
      remainingTokens = rest
    }
    (statements.reverse, remainingTokens)
  }

  private def parseStatement(tokens: List[Token]): (Statement, List[Token]) = {
    tokens match {
      case Let :: Identifier(name) :: Assign :: rest =>
        val (expr, afterExpr) = parseExpression(rest)
        afterExpr match {
          case Semicolon :: remainingTokens =>
            (LetStmt(IdentifierExpr(name), expr), remainingTokens)
          case _ => throw new RuntimeException("Expected ';' after let statement")
        }
      case _ =>
        val (expr, remainingTokens) = parseExpression(tokens)
        remainingTokens match {
          case Semicolon :: rest => (ExpressionStmt(expr), rest)
          case _ => throw new RuntimeException("Expected ';' after expression")
        }
    }
  }

  private def parseExpression(tokens: List[Token]): (Expression, List[Token]) = {
    tokens match {
      case Number(num) :: remainingTokens => (NumberLiteralExpr(num), remainingTokens)
      case _ => throw new RuntimeException("Unsupported expression")
    }
  }

}
