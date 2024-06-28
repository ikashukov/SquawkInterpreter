name := "SquawkInterpreter"
ThisBuild / version := "0.91"
ThisBuild / scalaVersion := "3.4.2"

lazy val root = project.in(file(".")).
  aggregate(squawk.js, squawk.jvm)
  .settings(
    publish := {},
    publishLocal := {},
    libraryDependencies += "org.scalameta" %% "munit" % "1.0.0" % Test
  )

lazy val squawk = crossProject(JSPlatform, JVMPlatform)
  .in(file("."))
  .jvmSettings(
    libraryDependencies += "org.scalameta" %% "munit" % "1.0.0" % Test,
  )
  .jsSettings(
    scalaJSUseMainModuleInitializer := true,
    libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.2.0"
  )
