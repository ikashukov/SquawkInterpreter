package org.squawk
package ast

import tokens._

sealed trait ASTNode

// Program
case class Program(statements: List[Statement]) extends ASTNode

// Expressions
sealed trait Expression extends ASTNode

case class IdentifierExpr(name: String) extends Expression

case class NumberLiteralExpr(value: Int) extends Expression

case class BooleanLiteralExpr(value: Boolean) extends Expression

case class BinaryExpr(operator: Token, left: Expression, right: Expression) extends Expression

case class UnaryExpr(operator: Token, operand: Expression) extends Expression

case class FunctionCallExpr(function: Expression, arguments: List[Expression]) extends Expression

// Statements
sealed trait Statement extends ASTNode

case class LetStmt(identifier: IdentifierExpr, value: Expression) extends Statement

case class ReturnStmt(value: Expression) extends Statement

case class ExpressionStmt(expression: Expression) extends Statement

case class BlockStmt(statements: List[Statement]) extends Statement

case class IfStmt(
                   condition: Expression,
                   consequence: BlockStmt,
                   alternative: Option[BlockStmt]
                 ) extends Statement

case class FunctionDeclarationStmt(
                                    name: IdentifierExpr,
                                    parameters: List[IdentifierExpr],
                                    body: BlockStmt
                                  ) extends Statement
