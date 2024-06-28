package org.squawk.ast

object Precedence {
  val LOWEST = 0
  val EQUALITY = 1    // ==, !=
  val COMPARE = 2     // >, <
  val SUM = 3         // +, -
  val PRODUCT = 4     // *, /
  val PREFIX = 5      // -X, !X
  val CALL = 6        // myFunction(X)
}
