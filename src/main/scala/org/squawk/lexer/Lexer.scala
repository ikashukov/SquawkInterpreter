package org.squawk
package lexer

import tokens.*

object Lexer {

  private val tokenPattern = raw"(=>|->|[-+*/(){}]|[A-Za-z][A-Za-z0-9_]*|\d+)".r
  private val integerPattern = "\\d+"

  def tokenize(input: String): List[Token] = {
    tokenPattern.findAllIn(input).toList.map {
      case "(" => OpenParen
      case ")" => CloseParen
      case "+" => Plus
      case "-" => Minus
      case num if num.matches(integerPattern) => Number(num.toInt)
      case id => Identifier(id)
    }
  }

}
