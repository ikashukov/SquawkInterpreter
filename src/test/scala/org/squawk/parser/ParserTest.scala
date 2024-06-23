package org.squawk.parser

import munit.FunSuite
import org.squawk.ast.{IdentifierExpr, LetStmt, NumberLiteralExpr, Program}
import org.squawk.tokens.*

class ParserTest extends FunSuite {

  test("'let' expression parsing test") {

    // let a = 10;
    val tokens = List(Let, Identifier("a"), Assign, Number(10), Semicolon)

    val parsedProgram = Parser.parse(tokens)
    val expectedProgram = Program(List(LetStmt(IdentifierExpr("a"), NumberLiteralExpr(10))))

    assertEquals(parsedProgram, expectedProgram)
  }

}
