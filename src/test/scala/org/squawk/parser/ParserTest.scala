package org.squawk.parser

import munit.FunSuite
import org.squawk.ast.{IdentifierExpr, LetStmt, NumberLiteralExpr, Program}
import org.squawk.lexer.Lexer

class ParserTest extends FunSuite {

  test("'let' expression parsing test") {

    val tokens = Lexer.tokenize("let a = 10;")

    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(LetStmt(IdentifierExpr("a"), NumberLiteralExpr(10))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("Invalid 'let' statement should fail") {

    val tokens = Lexer.tokenize("let a 10;")

    val parsedProgram = Parser.parse(tokens)

    parsedProgram match {
      case Right(_) => fail("Parsing should have failed")
      case Left(error) => assertEquals(error, "Unsupported expression")
    }
  }

}
