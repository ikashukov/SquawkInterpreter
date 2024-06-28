package org.squawk.web

import org.scalajs.dom
import org.scalajs.dom.document
import org.squawk.evaluator.Evaluator
import org.squawk.lexer.Lexer
import org.squawk.parser.Parser

object WebREPL {
  private var environment: Evaluator.Environment = Map.empty

  def main(args: Array[String]): Unit = {
    setupUI()
  }

  private def setupUI(): Unit = {
    val inputArea = document.getElementById("input").asInstanceOf[dom.html.TextArea]

    val runButton = document.getElementById("runButton").asInstanceOf[dom.html.Button]
    runButton.addEventListener("click", { (_: dom.MouseEvent) =>
      runCode(inputArea.value)
    })

    val showEnvButton = document.getElementById("showEnvButton").asInstanceOf[dom.html.Button]
    showEnvButton.addEventListener("click", { (_: dom.MouseEvent) =>
      showEnv()
    })

    val clearEnvButton = document.getElementById("clearEnvButton").asInstanceOf[dom.html.Button]
    clearEnvButton.addEventListener("click", { (_: dom.MouseEvent) =>
      clearEnv()
    })
  }

  private def runCode(input: String): Unit = {
    val tokens = Lexer.tokenize(input)
    val parseResult = Parser.parse(tokens)

    parseResult match {
      case Right(program) =>
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

  private def showEnv(): Unit = {
    val envOutput = environment.map { case (name, value) => s"$name = $value" }.mkString("\n")
    document.getElementById("output").textContent = envOutput
  }

  private def clearEnv(): Unit = {
    environment = Map.empty
    document.getElementById("output").textContent = "Environment cleared"
  }
}
