package org.squawk
package repl

import lexer.Lexer
import parser.Parser
import evaluator.Evaluator
import scala.io.StdIn.readLine

object REPL {
  def main(args: Array[String]): Unit = {
    println()
    println("Welcome to Squawk REPL. Type your code and press Enter to parse and evaluate.")
    println("Type ':showEnv' to display the current environment.")
    println("An empty input or ':exit' will exit the REPL.")
    repl()
  }

  private def repl(): Unit = {
    var continue = true
    var environment: Evaluator.Environment = Map.empty

    while (continue) {
      print("> ")
      val input = readLine()

      if (input.trim.isEmpty) {
        continue = false
      } else if (input.startsWith(":")) {
        handleCommand(input, environment) match {
          case Some(updatedEnv) => environment = updatedEnv
          case None => continue = false
        }
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
                  value match {
                    case Evaluator.VoidValue => println("Result: OK")
                    case _ => println(s"Result: $value")
                  }
                case Left(error) => println(s"Evaluation error: $error")
              }
            }
          case Left(error) => println(s"Parsing error: $error")
        }
      }
    }

    println("Goodbye!")
  }

  private def handleCommand(command: String, env: Evaluator.Environment): Option[Evaluator.Environment] = {
    command match {
      case ":showEnv" =>
        println("Current environment:")
        env.foreach { case (name, value) => println(s"$name = $value") }
        Some(env)
      case ":exit" =>
        println("Exiting REPL...")
        None
      case _ =>
        println(s"Unknown command: $command")
        Some(env)
    }
  }
}
