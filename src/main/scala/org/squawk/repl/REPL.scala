package org.squawk
package repl

import lexer.Lexer
import parser.Parser
import evaluator.Evaluator
import scala.io.StdIn.readLine

object REPL {
  def main(args: Array[String]): Unit = {
    println("Welcome to Squawk REPL. Type your code and press Enter to parse and evaluate. An empty input will exit the REPL.")
    repl()
  }

  def repl(): Unit = {
    var continue = true
    var environment: Evaluator.Environment = Map.empty

    while (continue) {
      print("> ")
      val input = readLine()

      if (input.trim.isEmpty) {
        continue = false
      } else {
        val tokens = Lexer.tokenize(input)
        val parseResult = Parser.parse(tokens)

        parseResult match {
          case Right(program) =>
            program.statements.foreach { stmt =>
              val evalResult = Evaluator.evaluate(stmt, environment)
              evalResult match {
                case Right((value, updatedEnv)) =>
                  environment = updatedEnv
                  println(s"Result: $value")
                case Left(error) => println(s"Evaluation error: $error")
              }
            }
          case Left(error) => println(s"Parsing error: $error")
        }
      }
    }

    println("Goodbye!")
  }
}
