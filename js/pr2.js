"use strict";
console.log("Підключено JavaScript для Практичної роботи №2");

// 2 Функція-оголошення
function greet() {
    console.log("Привіт, світ!");
}
greet();
greet();

// 2.1 Функціональний вираз
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5)); // 20

// 2.2 Стрілочна функція
const divide = (a, b) => a / b;
console.log(divide(20, 4)); // 5

// 3 Функція з параметрами та return
function square(x) {
    return x * x;
}
console.log(square(6)); // 36

// 3.1 Демонстрація областей видимості
if (true) {
    let localVar = "Я в блоці";
    console.log(localVar); // Працює
}
// console.log(localVar); // Має викликати ReferenceError

// 4 Функція-лічильник із замиканням
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 4.1 Демонстрація контексту this
const person = {
    name: "Олена",
    sayHello() {
        console.log(`Привіт, мене звуть ${this.name}`);
    }
};
person.sayHello(); // Привіт, мене звуть Олена

// 4.2 Каррінг
function add(a) {
    return function(b) {
        return a + b;
    };
}
const addTen = add(10);
console.log(addTen(5)); // 15

// 5.1 Функціональна анкета
function createSurvey() {
    let name = prompt("Ваше ім'я:");
    let age = Number(prompt("Ваш вік:"));
    let city = prompt("Ваше місто:");
    let isAdult = age >= 18 ? "повнолітній" : "неповнолітній";
    return { name, age, city, isAdult };
}
function displaySurvey(surveyData) {
    alert(`Ім'я: ${surveyData.name}\nВік: ${surveyData.age} (${surveyData.isAdult})\nМісто: ${surveyData.city}`);
    console.log(surveyData);
}
const survey = createSurvey();
displaySurvey(survey);

// 5.2 Конвертер температур
function createConverter(ratio, offset) {
    return function(value) {
        return value * ratio + offset;
    };
}
const celsiusToFahrenheit = createConverter(9/5, 32);
const fahrenheitToCelsius = createConverter(5/9, -32 * 5/9);

const temp = Number(prompt("Введіть температуру:"));
const direction = prompt("Введіть напрямок (C to F або F to C):");

if (direction === "C to F") {
    const result = celsiusToFahrenheit(temp);
    alert(`Температура у Фаренгейтах: ${result}`);
    console.log(`Температура у Фаренгейтах: ${result}`);
} else if (direction === "F to C") {
    const result = fahrenheitToCelsius(temp);
    alert(`Температура у Цельсіях: ${result}`);
    console.log(`Температура у Цельсіях: ${result}`);
} else {
    alert("Некоректний напрямок!");
}