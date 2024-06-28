package org.squawk.repl

import munit.FunSuite
import java.io.{ByteArrayInputStream, ByteArrayOutputStream, PrintStream}

class REPLTest extends FunSuite {

  private def runReplWithInput(input: String): String = {
    val in = new ByteArrayInputStream(input.getBytes)
    val out = new ByteArrayOutputStream()
    Console.withIn(in) {
      Console.withOut(new PrintStream(out)) {
        REPL.main(Array.empty)
      }
    }
    out.toString
  }

  test("simple evaluation") {
    val input = "let x = 10;\nx;\n:exit\n"
    val output = runReplWithInput(input)
    assert(output.contains("Result: NumberValue(10)"))
  }

  test("variable declaration") {
    val input = "let x = 10;\n:exit\n"
    val output = runReplWithInput(input)
    assert(output.contains("Result: OK"))
  }

  test("function evaluation") {
    val input = "fn add(a,b) {return a+b;}\nadd(11,22);\n:exit\n"
    val output = runReplWithInput(input)
    assert(output.contains("Result: NumberValue(33)"))
  }

  test("incorrect syntax in input") {
    val input = "fn add(a,b) {return a+b;}\nadd(2);\n:exit\n"
    val output = runReplWithInput(input)
    println(output)
    assert(output.contains("Evaluation error: Expected 2 arguments but got 1"))
  }

}