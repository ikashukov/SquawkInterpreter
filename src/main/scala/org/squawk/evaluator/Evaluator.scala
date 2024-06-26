package org.squawk
package evaluator

import ast._
import tokens._

object Evaluator {
  sealed trait Value
  case class NumberValue(value: Int) extends Value
  case class BooleanValue(value: Boolean) extends Value

  type Environment = Map[String, Value]

  def evaluate(node: ASTNode, env: Environment = Map.empty): Either[String, (Value, Environment)] = {
    node match {
      case NumberLiteralExpr(value) => Right((NumberValue(value), env))
      case BooleanLiteralExpr(value) => Right((BooleanValue(value), env))
      case IdentifierExpr(name) =>
        env.get(name).toRight(s"Undefined variable: $name").map(value => (value, env))
      case LetStmt(identifier, value) =>
        evaluate(value, env).map { case (v, updatedEnv) => (NumberValue(0), updatedEnv + (identifier.name -> v)) }
      case ExpressionStmt(expression) =>
        evaluate(expression, env).map { case (v, updatedEnv) => (v, updatedEnv) }
      case ReturnStmt(value) =>
        evaluate(value, env).map { case (v, updatedEnv) => (v, updatedEnv) }
      case BinaryExpr(operator, left, right) =>
        for {
          leftValue <- evaluate(left, env).map(_._1)
          rightValue <- evaluate(right, env).map(_._1)
          result <- evalBinaryExpr(operator, leftValue, rightValue)
        } yield (result, env)
      case _ => Left(s"Unsupported AST node: $node")
    }
  }

  private def evalBinaryExpr(operator: Token, left: Value, right: Value): Either[String, Value] = {
    (operator, left, right) match {
      case (Plus, NumberValue(l), NumberValue(r)) => Right(NumberValue(l + r))
      case (Minus, NumberValue(l), NumberValue(r)) => Right(NumberValue(l - r))
      case (Asterisk, NumberValue(l), NumberValue(r)) => Right(NumberValue(l * r))
      case (Slash, NumberValue(l), NumberValue(r)) => Right(NumberValue(l / r))
      case (Equal, NumberValue(l), NumberValue(r)) => Right(BooleanValue(l == r))
      case (NotEqual, NumberValue(l), NumberValue(r)) => Right(BooleanValue(l != r))
      case (LessThan, NumberValue(l), NumberValue(r)) => Right(BooleanValue(l < r))
      case (GreaterThan, NumberValue(l), NumberValue(r)) => Right(BooleanValue(l > r))
      case _ => Left(s"Unsupported binary operation: $operator $left $right")
    }
  }
}
