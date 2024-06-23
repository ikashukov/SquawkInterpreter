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
      !-/*6;
      6 < 12 > 3;
      if (7 < 13) {
      return true;
      } else {
      return false;
      }
      """
    val obtainedTokens = Lexer.tokenize(code)
    val expectedTokens = List(
      Let, Identifier("seven"), Assign, Number(7), Semicolon,
      Let, Identifier("twelve"), Assign, Number(12), Semicolon,
      Let, Identifier("add"), Assign, Function, OpenParen, Identifier("x"), Comma, Identifier("y"), CloseParen, OpenBracket,
      Identifier("x"), Plus, Identifier("y"), Semicolon,
      CloseBracket, Semicolon,
      Let, Identifier("result"), Assign, Identifier("add"), OpenParen, Identifier("five"), Comma, Identifier("ten"), CloseParen, Semicolon,
      Bang, Minus, Slash, Asterisk, Number(6), Semicolon,
      Number(6), LessThan, Number(12), GreaterThan, Number(3), Semicolon,
      If, OpenParen, Number(7), LessThan, Number(13), CloseParen, OpenBracket,
      Return, True, Semicolon,
      CloseBracket, Else, OpenBracket,
      Return, False, Semicolon,
      CloseBracket
    )
    assertEquals(obtainedTokens, expectedTokens)
  }

}