package org.squawk
package repl

import lexer.Lexer
import parser.Parser
import scala.io.StdIn.readLine

object REPL {

  private val HELLO = "Welcome to Squawk REPL. Type your code and press Enter to parse. An empty input will exit the REPL."
  private val PROMPT = "> "
  private val GOODBYE = "Goodbye!"

  def main(args: Array[String]): Unit = {
    println(HELLO)
    repl()
  }

  private def repl(): Unit = {
    var continue = true

    while (continue) {
      print(PROMPT)
      val input = readLine()

      if (input.trim.isEmpty) {
        continue = false
      } else {
        val tokens = Lexer.tokenize(input)
        val parseResult = Parser.parse(tokens)

        parseResult match {
          case Right(program) => println(program)
          case Left(error) => println(s"Error: $error")
        }
      }
    }

    println(GOODBYE)
  }
}
