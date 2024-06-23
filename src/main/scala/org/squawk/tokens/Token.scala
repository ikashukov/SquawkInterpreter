package org.squawk
package tokens

sealed trait Token

case object OpenParen extends Token       // (
case object CloseParen extends Token      // )
case object OpenBracket extends Token     // {
case object CloseBracket extends Token    // }

case object Plus extends Token // +
case object Minus extends Token // -
case object Assign extends Token // =
case object Semicolon extends Token // ;
case object Comma extends Token // ,

// keywords
case object Let extends Token             // let
case object Function extends Token        // fn

case class Identifier(name: String) extends Token
case class Number(value: Int) extends Token

// unrecognized
case object Unknown extends Token