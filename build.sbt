name := "SquawkInterpreter"
ThisBuild / version := "0.91"
ThisBuild / scalaVersion := "3.4.2"
// Compile / mainClass := Some("org.squawk.repl.REPL")
Compile / mainClass := Some("org.squawk.web.WebREPL")

lazy val root = project
  .in(file("."))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    libraryDependencies ++= Seq(
      "org.scalameta" %% "munit" % "1.0.0" % Test,
      "org.scala-js" %%% "scalajs-dom" % "2.2.0"
    ),
    scalaJSUseMainModuleInitializer := true
  )
