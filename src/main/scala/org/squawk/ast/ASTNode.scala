package org.squawk
package ast

sealed trait ASTNode

// Program
case class Program(statements: List[Statement]) extends ASTNode

// Expressions
sealed trait Expression extends ASTNode

case class IdentifierExpr(name: String) extends Expression
case class NumberLiteralExpr(value: Int) extends Expression
case class BooleanLiteralExpr(value: Boolean) extends Expression

case class BinaryExpr(operator: String, left: Expression, right: Expression) extends Expression
case class UnaryExpr(operator: String, operand: Expression) extends Expression

case class FunctionCallExpr(function: Expression, arguments: List[Expression]) extends Expression

// Statements
sealed trait Statement extends ASTNode

case class LetStatement(identifier: IdentifierExpr, value: Expression) extends Statement
case class ReturnStatement(value: Expression) extends Statement
case class ExpressionStatement(expression: Expression) extends Statement
case class BlockStatement(statements: List[Statement]) extends Statement

case class IfStatement(
                        condition: Expression,
                        consequence: BlockStatement,
                        alternative: Option[BlockStatement]
                      ) extends Statement

case class FunctionDeclaration(
                                name: IdentifierExpr,
                                parameters: List[IdentifierExpr],
                                body: BlockStatement
                              ) extends Statement
