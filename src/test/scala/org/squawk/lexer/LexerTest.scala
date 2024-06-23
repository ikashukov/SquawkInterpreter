package org.squawk.lexer

import munit.FunSuite
import org.squawk.tokens.*

class LexerTest extends FunSuite {

  test("basic lexer functionality test") {
    val code = "(a + 42)"
    val obtainedTokens = Lexer.tokenize(code)
    val expectedTokens = List(OpenParen, Identifier("a"), Plus, Number(42), CloseParen)
    assertEquals(obtainedTokens, expectedTokens)
  }

  test("extended lexer functionality test") {
    val code = """
      let seven = 7;
      let twelve = 12;
      let add = fn(x, y) {
      x + y;
      };
      let result = add(five, ten);
      """
    val obtainedTokens = Lexer.tokenize(code)
    val expectedTokens = List(
      Let, Identifier("seven"), Assign, Number(7), Semicolon,
      Let, Identifier("twelve"), Assign, Number(12), Semicolon,
      Let, Identifier("add"), Assign, Function, OpenParen, Identifier("x"), Comma, Identifier("y"), CloseParen, OpenBracket,
      Identifier("x"), Plus, Identifier("y"), Semicolon,
      CloseBracket, Semicolon,
      Let, Identifier("result"), Assign, Identifier("add"), OpenParen, Identifier("five"), Comma, Identifier("ten"), CloseParen, Semicolon
    )
    assertEquals(obtainedTokens, expectedTokens)
  }

}