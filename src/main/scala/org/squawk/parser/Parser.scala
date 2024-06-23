package org.squawk
package parser

import lexer._
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

  private def parseStatements(tokens: List[Token]): (List[Statement], List[Token]) = ???

  private def parseStatement(tokens: List[Token]): (Statement, List[Token]) = ???

  private def parseExpression(tokens: List[Token]): (Expression, List[Token]) = ???

}
