FROM sbtscala/scala-sbt:eclipse-temurin-jammy-22_36_1.10.0_3.4.2
WORKDIR /app
COPY . /app
RUN sbt compile
CMD ["sbt", "run"]
