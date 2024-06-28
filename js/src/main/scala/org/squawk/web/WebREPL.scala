package org.squawk.web

import org.scalajs.dom
import org.scalajs.dom.document
import org.squawk.evaluator.Evaluator
import org.squawk.lexer.Lexer
import org.squawk.parser.Parser

object WebREPL {
  def main(args: Array[String]): Unit = {
    setupUI()
  }

  private def setupUI(): Unit = {
    val inputArea = document.createElement("textarea")
    inputArea.setAttribute("id", "input")
    inputArea.setAttribute("rows", "10")
    inputArea.setAttribute("cols", "50")

    val runButton = document.createElement("button")
    runButton.textContent = "Run"
    runButton.addEventListener("click", { (_: dom.MouseEvent) =>
      runCode(inputArea.asInstanceOf[dom.html.TextArea].value)
    })

    val outputArea = document.createElement("div")
    outputArea.setAttribute("id", "output")

    document.body.appendChild(inputArea)
    document.body.appendChild(runButton)
    document.body.appendChild(outputArea)
  }

  private def runCode(input: String): Unit = {
    val tokens = Lexer.tokenize(input)
    val parseResult = Parser.parse(tokens)

    parseResult match {
      case Right(program) =>
        var environment: Evaluator.Environment = Map.empty
        val output = program.statements.map { stmt =>
          val evalResult = Evaluator.evaluate(stmt, environment)
          evalResult match {
            case Right((value, updatedEnv)) =>
              environment = updatedEnv
              value match {
                case Evaluator.VoidValue => "OK"
                case _ => s"$value"
              }
            case Left(error) => s"Evaluation error: $error"
          }
        }.mkString("\n")

        document.getElementById("output").textContent = output

      case Left(error) =>
        document.getElementById("output").textContent = s"Parsing error: $error"
    }
  }
}
