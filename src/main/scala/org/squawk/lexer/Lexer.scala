package org.squawk
package lexer

import tokens.*

object Lexer {

  private val tokenPattern = raw"([-+(){}=,;]|[A-Za-z][A-Za-z0-9_]*|\d+)".r
  private val integerPattern = "\\d+"
  private val identifierPattern = "[A-Za-z][A-Za-z0-9_]*"

  def tokenize(input: String): List[Token] = {
    tokenPattern.findAllIn(input).toList.map {
      case "(" => OpenParen
      case ")" => CloseParen
      case "{" => OpenBracket
      case "}" => CloseBracket
      case "+" => Plus
      case "-" => Minus
      case "=" => Assign
      case ";" => Semicolon
      case "," => Comma
      case "let" => Let
      case "fn" => Function
      case num if num.matches(integerPattern) => Number(num.toInt)
      case id if id.matches(identifierPattern) => Identifier(id)
      case _ => Unknown
    }
  }

}
