package org.squawk.parser

import munit.FunSuite
import org.squawk.ast._
import org.squawk.lexer.Lexer
import org.squawk.tokens._

/*
 * Positive test cases for the Squawk parser. 
 */
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

  test("unary minus parsing test") {
    val tokens = Lexer.tokenize("(-2 - -3) * -4;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(ExpressionStmt(
      BinaryExpr(
        Asterisk,
        UnaryExpr(
          Minus,
          BinaryExpr(Minus,NumberLiteralExpr(2),
          UnaryExpr(Minus,NumberLiteralExpr(3)))),
        UnaryExpr(Minus,NumberLiteralExpr(4)))
    )))

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

  test("grouped expression parsing test") {
    val tokens = Lexer.tokenize("(1 + 2) * 3;")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(
      ExpressionStmt(BinaryExpr(Asterisk,
        BinaryExpr(Plus, NumberLiteralExpr(1), NumberLiteralExpr(2)), NumberLiteralExpr(3)))
    ))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }

  test("function declaration parsing test") {
    val tokens = Lexer.tokenize("fn add(a, b) { return a + b; }")
    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(
      FunctionDeclarationStmt(
        IdentifierExpr("add"),
        List(IdentifierExpr("a"), IdentifierExpr("b")),
        BlockStmt(List(
          ReturnStmt(BinaryExpr(Plus, IdentifierExpr("a"), IdentifierExpr("b")))
        ))
      )
    ))

    parsedProgram match {
      case Right(program) => assertEquals(program, expectedProgram)
      case Left(error) => fail(s"Parsing failed with error: $error")
    }
  }
}
