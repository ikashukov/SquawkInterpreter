package org.squawk
package evaluator

import ast._
import tokens._

object Evaluator {
  sealed trait Value
  case class NumberValue(value: Int) extends Value
  case class BooleanValue(value: Boolean) extends Value
  case class FunctionValue(parameters: List[String], body: BlockStmt, env: Environment) extends Value
  case object VoidValue extends Value

  type Environment = Map[String, Value]

  def evaluate(node: ASTNode, env: Environment = Map.empty): Either[String, (Value, Environment)] = {
    node match {
      case NumberLiteralExpr(value) => Right((NumberValue(value), env))
      case BooleanLiteralExpr(value) => Right((BooleanValue(value), env))
      case IdentifierExpr(name) =>
        env.get(name).toRight(s"Undefined variable: $name").map(value => (value, env))
      case LetStmt(identifier, value) =>
        evaluate(value, env).map { case (v, updatedEnv) => (VoidValue, updatedEnv + (identifier.name -> v)) }
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
      case UnaryExpr(operator, operand) =>
        evaluate(operand, env).flatMap { case (value, updatedEnv) =>
          evalUnaryExpr(operator, value).map(result => (result, updatedEnv))
        }
      case FunctionDeclarationStmt(name, parameters, body) =>
        val functionValue = FunctionValue(parameters.map(_.name), body, env)
        Right((VoidValue, env + (name.name -> functionValue)))
      case FunctionCallExpr(function, arguments) =>
        for {
          funcValue <- evaluate(function, env).map(_._1)
          argValues <- evaluateArguments(arguments, env)
          result <- applyFunction(funcValue, argValues, env)
        } yield (result, env)
      case _ => Left(s"Unsupported AST node: $node")
    }
  }

  private def evalBinaryExpr(operator: Token, left: Value, right: Value): Either[String, Value] = {
    (operator, left, right) match {
      case (Plus, NumberValue(l), NumberValue(r)) => Right(NumberValue(l + r))
      case (Minus, NumberValue(l), NumberValue(r)) => Right(NumberValue(l - r))
      case (Asterisk, NumberValue(l), NumberValue(r)) => Right(NumberValue(l * r))
      case (Slash, NumberValue(_), NumberValue(0)) => Left("Division by zero")
      case (Slash, NumberValue(l), NumberValue(r)) => Right(NumberValue(l / r))
      case (Equal, NumberValue(l), NumberValue(r)) => Right(BooleanValue(l == r))
      case (NotEqual, NumberValue(l), NumberValue(r)) => Right(BooleanValue(l != r))
      case (LessThan, NumberValue(l), NumberValue(r)) => Right(BooleanValue(l < r))
      case (GreaterThan, NumberValue(l), NumberValue(r)) => Right(BooleanValue(l > r))
      case _ => Left(s"Unsupported binary operation: $operator $left $right")
    }
  }

  private def evalUnaryExpr(operator: Token, value: Value): Either[String, Value] = {
    (operator, value) match {
      case (Minus, NumberValue(v)) => Right(NumberValue(-v))
      case _ => Left(s"Unsupported unary operation: $operator $value")
    }
  }

  private def evaluateArguments(arguments: List[Expression], env: Environment): Either[String, List[Value]] = {
    arguments.foldRight(Right(Nil): Either[String, List[Value]]) { (arg, acc) =>
      for {
        argValue <- evaluate(arg, env).map(_._1)
        accValues <- acc
      } yield argValue :: accValues
    }
  }

  private def applyFunction(funcValue: Value, argValues: List[Value], env: Environment): Either[String, Value] = {
    funcValue match {
      case FunctionValue(parameters, body, funcEnv) =>
        if (parameters.length != argValues.length) {
          Left(s"Expected ${parameters.length} arguments but got ${argValues.length}")
        } else {
          val newEnv = funcEnv ++ parameters.zip(argValues).toMap
          val result = body.statements.foldLeft[Either[String, Value]](Right(VoidValue)) {
            case (Right(_), stmt) => evaluate(stmt, newEnv).map(_._1)
            case (left, _) => left
          }
          result
        }
      case _ => Left(s"Attempted to call a non-function value: $funcValue")
    }
  }
}
