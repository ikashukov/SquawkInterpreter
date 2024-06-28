# Squawk!

## Что это?

Интерпретатор простого языка программирования под названием Squawk.

## Зачем это?

- Интерпретаторы и компиляторы - это магия, которая преобразует набор символов в команды, которым подчиняется компьютер. Мне хотелось понять, как они работают, хотя бы на самом поверхностном уровне.
- Практика работы со Scala 3. Возможности языка, особенно pattern matching, оказались хорошо соответствующими выбранной теме проекта.

## Что он умеет?

- **Присвоение значений переменным**: `let x = 2;`
- **Арифметические операции**: сложение, вычитание, умножение и целочисленное деление.
- **Операции сравнения**: `>`, `<`, `==`, `!=`.
- **Создание функций**: `fn add(a,b) {return a+b;}`
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
fn multiply(a, b) {return a * b;}
multiply(add(2, 3), add(4, 5));
```

### Подстановка переменных в вызов функций

```squawk
let x = 5;
fn multiply(a, b) {return a * b;}
multiply(x, 2);
```
Примеры других программ (как синтаксически корректных, так и некорректных) содержатся в интеграционных тестах (src/test/scala/org/squawk/integration/IntegrationTest.scala).

### Системные требования
- Docker (рекомендуется)

или

- Scala 3.4.2 или выше
- sbt 1.9.9 или выше

Работоспособность приложения на более ранних версиях возможна, но не тестировалась.

## Запуск через Docker

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

## Запуск консоли проекта (REPL) без использования Docker

- Клонируйте проект:
```shell
git clone https://github.com/IKashukov/SquawkInterpreter.git
cd SquawkInterpreter
```
- Запустите оболочку REPL:
```shell
sbt run
```
- Как пользоваться REPL:
    - введите код на Squawk и нажмите Enter, чтобы запустить его парсинг и обработку.
    - команда :showEnv выводит текущее содержимое среды (переменные и их значения, объявления функций).
    - команда :exit или пустой ввод позволяют завершить работку с REPL.

## Запуск тестов

```shell
sbt test
```