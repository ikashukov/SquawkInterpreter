package org.squawk
package evaluator

import ast._

object Evaluator {
  sealed trait Value
  case class NumberValue(value: Int) extends Value
  case class BooleanValue(value: Boolean) extends Value

  def evaluate(node: ASTNode): Either[String, Value] = {
    node match {
      case NumberLiteralExpr(value) => Right(NumberValue(value))
      case BooleanLiteralExpr(value) => Right(BooleanValue(value))
      case _ => Left(s"Unsupported AST node: $node")
    }
  }
}
