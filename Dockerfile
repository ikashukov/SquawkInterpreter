FROM hseeberger/scala-sbt:8u222_1.3.5_2.13.1
WORKDIR /app
COPY . /app
RUN sbt compile
CMD ["sbt", "run"]
