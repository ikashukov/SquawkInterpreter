# Squawk!

![CI](https://github.com/ikashukov/SquawkInterpreter/actions/workflows/ci.yml/badge.svg)
[![codecov](https://codecov.io/gh/ikashukov/SquawkInterpreter/branch/master/graph/badge.svg)](https://codecov.io/gh/ikashukov/SquawkInterpreter)

## Что это?

Интерпретатор простого языка программирования под названием Squawk. Самая актуальная веб-версия ("песочница") всегда доступна здесь: https://ikashukov.github.io/SquawkInterpreter/

## Зачем это?

- Интерпретаторы и компиляторы - это магия, которая преобразует набор символов в команды, которым подчиняется компьютер. Мне хотелось понять, как они работают, хотя бы на самом поверхностном уровне.
- Практика работы со Scala 3. Возможности языка, особенно pattern matching, оказались хорошо соответствующими выбранной теме проекта.

## Что он умеет?

- **Арифметические операции**: сложение, вычитание, умножение и целочисленное деление.
- **Операции сравнения**: `>`, `<`, `==`, `!=`.
- **Целочисленные переменные**: `let x = 2;`
- **Объявление функций**: `fn add(a,b) {return a+b;}`
- **Вызов функций**: `add(2,3);`
- **Обработка ошибок**: обработка распространённых типов ошибок, в числе которых использование необъявленных переменных, вызов функций с некорректным числом аргументов, деление на ноль.

## Как это работает?

Пользовательский ввод последовательно проходит обработку тремя компонентами: 
1. **Lexer.scala**: Преобразует пользовательский ввод в последовательность токенов.
2. **Parser.scala**: Преобразует последовательность токенов в абстрактное синтаксическое дерево (AST).
3. **Evaluator.scala**: Обрабатывает AST и вычисляет конечный результат выполнения программы.

## Примеры программ

### Арифметические вычисления

```squawk
42 + 17*3 - (-5 / 2);
```

### Присвоение значений переменным

```squawk
let x = 10;
let y = 5;
y*(x+2);
```

### Сравнение значений
```squawk
let x = 7*2;
let y = 5*3;
x > y;
```

### Определение и вызов функции

```squawk
fn add(a, b) {return a + b;}
add(3, 4);
```

### Вложенный вызов функций

```squawk
fn add(a, b) {return a + b;}
fn mult(a, b) {return a * b;}
mult(add(2, 3), mult(4, 5));
```

### Подстановка переменных в вызов функций

```squawk
let x = 5;
fn mult(a, b) {return a * b;}
mult(x, 2);
```
Примеры других программ (как синтаксически корректных, так и некорректных) содержатся в интеграционных тестах (src/test/scala/org/squawk/integration/IntegrationTest.scala).

## Системные требования
- Браузер с включенным Javascript (для работы через веб-интерфейс, рекомендуется)

или

- Docker (рекомендуется)

или

- Scala 3.4.2 или выше
- sbt 1.9.9 или выше

Работоспособность приложения на более ранних версиях возможна, но не тестировалась.

## Веб-интерфейс ("песочница")
https://ikashukov.github.io/SquawkInterpreter/ - на этой странице всегда развернута самая актуальная версия интерпретатора, работающая на основе Scala.js. Просто введите код (или скопируйте из примеров) и нажмите Run.

## Запуск консоли интерпретатора (REPL) через Docker

- Клонируйте проект:
```shell
git clone https://github.com/IKashukov/SquawkInterpreter.git
cd SquawkInterpreter
```
- Выполните сборку Docker-образа:
```shell
docker build -t squawk-interpreter .
```
- Запустите контейнер:
```shell
docker run -it squawk-interpreter
```

## Запуск консоли интерпретатора без использования Docker

- Клонируйте проект:
```shell
git clone https://github.com/IKashukov/SquawkInterpreter.git
cd SquawkInterpreter
```
- Запустите консоль REPL:
```shell
sbt squawkJVM/run
```

## Как пользоваться консолью интерпретатора (REPL)
- Введите код на Squawk и нажмите Enter, чтобы запустить его парсинг и обработку.
- Многострочный ввод не поддерживается - каждая вводимая команда должна быть синтаксически корректной. 
  - Пример: ```fn add(a, b) {return a + b;}``` ↵Enter ```add(3, 4);``` ↵Enter. 
  - Или в одну строчку: ```fn add(a, b) {return a + b;} add(3, 4);``` ↵Enter
- Команда :showEnv выводит текущее содержимое среды (переменные и их значения, объявления функций).
- Команда :exit или пустой ввод завершают выполнение REPL.
