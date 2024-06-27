package org.squawk.integration

import munit.FunSuite
import org.squawk.lexer.Lexer
import org.squawk.parser.Parser
import org.squawk.evaluator.Evaluator

class IntegrationTest extends FunSuite {

  def evaluateProgram(input: String): Either[String, Evaluator.Value] = {
    val tokens = Lexer.tokenize(input)
    val parseResult = Parser.parse(tokens)

    parseResult match {
      case Right(program) =>
        var environment: Evaluator.Environment = Map.empty
        val evalResults = program.statements.map { stmt =>
          val evalResult = Evaluator.evaluate(stmt, environment)
          evalResult match {
            case Right((value, updatedEnv)) =>
              environment = updatedEnv
              Right(value)
            case Left(error) => Left(error)
          }
        }
        evalResults.find(_.isLeft).getOrElse(Right(evalResults.last.toOption.get))
      case Left(error) => Left(s"Parsing error: $error")
    }
  }

  test("evaluate simple let and variable usage") {
    val program = """
      let x = 42;
      x;
    """
    val result = evaluateProgram(program)
    assertEquals(result, Right(Evaluator.NumberValue(42)))
  }

  test("evaluate simple function call") {
    val program = """
      fn add(a, b) {
        return a + b;
      }
      add(3, 4);
    """
    val result = evaluateProgram(program)
    assertEquals(result, Right(Evaluator.NumberValue(7)))
  }

  test("evaluate nested function calls") {
    val program = """
      fn add(a, b) {
        return a + b;
      }
      fn multiply(a, b) {
        return a * b;
      }
      multiply(add(2, 3), add(4, 5));
    """
    val result = evaluateProgram(program)
    assertEquals(result, Right(Evaluator.NumberValue(45)))
  }

  test("evaluate with let and function call") {
    val program = """
      let x = 21;
      fn multiply(a, b) {
        return a * b;
      }
      multiply(x, 2);
    """
    val result = evaluateProgram(program)
    assertEquals(result, Right(Evaluator.NumberValue(42)))
  }

  test("evaluate division by zero") {
    val program = """
      42 / 0;
    """
    val result = evaluateProgram(program)
    assertEquals(result, Left("Division by zero"))
  }

  test("evaluate undefined variable") {
    val program = """
      y;
    """
    val result = evaluateProgram(program)
    assertEquals(result, Left("Undefined variable: y"))
  }

  test("evaluate function with incorrect number of arguments") {
    val program = """
      fn add(a, b) {
        return a + b;
      }
      add(3);
    """
    val result = evaluateProgram(program)
    assertEquals(result, Left("Expected 2 arguments but got 1"))
  }
}
