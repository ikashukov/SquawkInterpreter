ThisBuild / version := "0.9-SNAPSHOT"
ThisBuild / scalaVersion := "3.4.2"
Compile / mainClass := Some("org.squawk.repl.REPL")

lazy val root = project
  .in(file("."))
  .settings(
    name := "squawk",
    libraryDependencies ++= Seq(
      "org.scalameta" %% "munit" % "1.0.0" % Test
    )
  )
