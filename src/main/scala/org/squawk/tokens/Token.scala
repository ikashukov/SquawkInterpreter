package org.squawk
package tokens

sealed trait Token
case object OpenParen extends Token
case object CloseParen extends Token
case class Identifier(name: String) extends Token
case class Number(value: Int) extends Token
case object Plus extends Token
case object Minus extends Token
case object Ident extends Token
