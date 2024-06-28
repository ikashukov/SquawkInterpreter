package org.squawk.parser

import munit.FunSuite
import org.squawk.ast.*
import org.squawk.lexer.Lexer
import org.squawk.tokens.*

/*
 * Negative test cases for the Squawk parser.
 */
class ParserFailureTest extends FunSuite {

  test("let statement w/o semicolon test") {
    val tokens = Lexer.tokenize("let x = 2")
    val parserOutput = Parser.parse(tokens)
    val expectedErrorMessage = "Expected ';' after let statement"

    parserOutput match {
      case Left(parserOutput) => assert(parserOutput.contains(expectedErrorMessage))
      case Right(_) => fail("Parsing succeeded when it shouldn't have")
    }
  }

  test("return statement w/o semicolon test") {
    val tokens = Lexer.tokenize("return 4")
    val parserOutput = Parser.parse(tokens)
    val expectedErrorMessage = "Expected ';' after return statement"

    parserOutput match {
      case Left(parserOutput) => assert(parserOutput.contains(expectedErrorMessage))
      case Right(_) => fail("Parsing succeeded when it shouldn't have")
    }
  }
}
