package org.squawk.lexer

import munit.FunSuite
import org.squawk.tokens.*

class LexerTest extends FunSuite {

  test("basic lexer functionality test") {
    val code = "  ( a +  42 ) "
    val obtainedTokens = Lexer.tokenize(code)
    val expectedTokens = List(OpenParen, Identifier("a"), Plus, Number(42), CloseParen)
    assertEquals(obtainedTokens, expectedTokens)
  }

}