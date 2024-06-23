package org.squawk.parser

import munit.FunSuite
import org.squawk.ast.{BinaryExpr, BooleanLiteralExpr, ExpressionStmt, IdentifierExpr, LetStmt, NumberLiteralExpr, Program, ReturnStmt}
import org.squawk.lexer.Lexer

class ParserTest extends FunSuite {

  test("'let' statement parsing test") {
    val tokens = Lexer.tokenize("let a = 10;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(LetStmt(IdentifierExpr("a"), NumberLiteralExpr(10))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("'return' statement parsing test with a number literal") {
    val tokens = Lexer.tokenize("return 111;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ReturnStmt(NumberLiteralExpr(111))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("'return' statement parsing test with a boolean") {
    val tokens = Lexer.tokenize("return false;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ReturnStmt(BooleanLiteralExpr(false))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("'return' statement parsing test with an identifier") {
    val tokens = Lexer.tokenize("return abcd;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ReturnStmt(IdentifierExpr("abcd"))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("basic addition expression parsing test") {
    val tokens = Lexer.tokenize("2 + 2;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ExpressionStmt(BinaryExpr("Plus", NumberLiteralExpr(2), NumberLiteralExpr(2)))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("arithmetic priority expression parsing test") {
    val tokens = Lexer.tokenize("2 + 3 * 4;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ExpressionStmt(BinaryExpr(
      "Plus",
      NumberLiteralExpr(2),
      BinaryExpr("Asterisk", NumberLiteralExpr(3), NumberLiteralExpr(4))
    ))))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

}
