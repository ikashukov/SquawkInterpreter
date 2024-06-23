package org.squawk.parser

import munit.FunSuite
import org.squawk.ast.{IdentifierExpr, LetStmt, NumberLiteralExpr, Program, ReturnStmt, BooleanLiteralExpr}
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

  test("'return' expression parsing test with a number literal") {
    val tokens = Lexer.tokenize("return 111;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ReturnStmt(NumberLiteralExpr(111))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("'return' expression parsing test with a boolean") {
    val tokens = Lexer.tokenize("return false;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ReturnStmt(BooleanLiteralExpr(false))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("'return' expression parsing test with an identifier") {
    val tokens = Lexer.tokenize("return abcd;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ReturnStmt(IdentifierExpr("abcd"))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }
}
