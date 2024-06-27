package org.squawk.evaluator

import munit.FunSuite
import org.squawk.ast._
import org.squawk.tokens._

class EvaluatorTest extends FunSuite {

  test("evaluate number literal") {
    val expr = NumberLiteralExpr(42)
    val result = Evaluator.evaluate(expr)
    assertEquals(result, Right((Evaluator.NumberValue(42), Map.empty)))
  }

  test("evaluate boolean literal") {
    val expr = BooleanLiteralExpr(true)
    val result = Evaluator.evaluate(expr)
    assertEquals(result, Right((Evaluator.BooleanValue(true), Map.empty)))
  }

  test("evaluate undefined variable") {
    val expr = IdentifierExpr("x")
    val result = Evaluator.evaluate(expr)
    assertEquals(result, Left("Undefined variable: x"))
  }

  test("evaluate let statement") {
    val stmt = LetStmt(IdentifierExpr("x"), NumberLiteralExpr(10))
    val result = Evaluator.evaluate(stmt)
    assertEquals(result, Right((Evaluator.NumberValue(0), Map("x" -> Evaluator.NumberValue(10)))))
  }

  test("evaluate variable") {
    val expr = IdentifierExpr("x")
    val env = Map("x" -> Evaluator.NumberValue(10))
    val result = Evaluator.evaluate(expr, env)
    assertEquals(result, Right((Evaluator.NumberValue(10), env)))
  }

  test("evaluate binary expression") {
    val expr = BinaryExpr(Plus, NumberLiteralExpr(10), NumberLiteralExpr(5))
    val result = Evaluator.evaluate(expr)
    assertEquals(result, Right((Evaluator.NumberValue(15), Map.empty)))
  }

  test("evaluate division by zero") {
    val expr = BinaryExpr(Slash, NumberLiteralExpr(10), NumberLiteralExpr(0))
    val result = Evaluator.evaluate(expr)
    assertEquals(result, Left("Division by zero"))
  }

  test("evaluate function declaration") {
    val stmt = FunctionDeclarationStmt(
      IdentifierExpr("add"),
      List(IdentifierExpr("a"), IdentifierExpr("b")),
      BlockStmt(List(ReturnStmt(BinaryExpr(Plus, IdentifierExpr("a"), IdentifierExpr("b")))))
    )
    val result = Evaluator.evaluate(stmt)
    assert(result.isRight)
    val (value, env) = result.toOption.get
    assertEquals(value, Evaluator.NumberValue(0))
    assert(env.contains("add"))
  }

  test("evaluate function call") {
    val stmt = FunctionDeclarationStmt(
      IdentifierExpr("add"),
      List(IdentifierExpr("a"), IdentifierExpr("b")),
      BlockStmt(List(ReturnStmt(BinaryExpr(Plus, IdentifierExpr("a"), IdentifierExpr("b")))))
    )
    val env = Evaluator.evaluate(stmt).toOption.get._2

    val callExpr = FunctionCallExpr(IdentifierExpr("add"), List(NumberLiteralExpr(3), NumberLiteralExpr(4)))
    val result = Evaluator.evaluate(callExpr, env)
    assertEquals(result, Right((Evaluator.NumberValue(7), env)))
  }

  test("evaluate function with incorrect number of arguments") {
    val stmt = FunctionDeclarationStmt(
      IdentifierExpr("add"),
      List(IdentifierExpr("a"), IdentifierExpr("b")),
      BlockStmt(List(ReturnStmt(BinaryExpr(Plus, IdentifierExpr("a"), IdentifierExpr("b")))))
    )
    val env = Evaluator.evaluate(stmt).toOption.get._2

    val callExpr = FunctionCallExpr(IdentifierExpr("add"), List(NumberLiteralExpr(3)))
    val result = Evaluator.evaluate(callExpr, env)
    assertEquals(result, Left("Expected 2 arguments but got 1"))
  }

}
