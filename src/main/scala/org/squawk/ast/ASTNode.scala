package org.squawk
package ast

sealed trait ASTNode

// Program
case class Program(statements: List[Statement]) extends ASTNode

// Expressions
sealed trait Expression extends ASTNode

case class Identifier(name: String) extends Expression
case class NumberLiteral(value: Int) extends Expression
case class BooleanLiteral(value: Boolean) extends Expression

case class BinaryExpression(operator: String, left: Expression, right: Expression) extends Expression
case class UnaryExpression(operator: String, operand: Expression) extends Expression

case class FunctionCall(function: Expression, arguments: List[Expression]) extends Expression

// Statements
sealed trait Statement extends ASTNode

case class LetStatement(identifier: Identifier, value: Expression) extends Statement
case class ReturnStatement(value: Expression) extends Statement
case class ExpressionStatement(expression: Expression) extends Statement
case class BlockStatement(statements: List[Statement]) extends Statement

case class IfStatement(
                        condition: Expression,
                        consequence: BlockStatement,
                        alternative: Option[BlockStatement]
                      ) extends Statement

case class FunctionDeclaration(
                                name: Identifier,
                                parameters: List[Identifier],
                                body: BlockStatement
                              ) extends Statement
