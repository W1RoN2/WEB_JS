import { greet, add, multiply, sumAll } from "utils.js";
import { user, numbers } from "data.js";

const { name, age, city, hobbies } = user;

console.log(greet(name));
console.log(`Користувач: ${name}, Вік: ${age}, Місто: ${city}`);
console.log(`Хобі: ${hobbies.join(", ")}`);

console.log("Додавання 10 + 20 =", add(10, 20));
console.log("Множення 10 * 20 =", multiply(10, 20));

const moreNumbers = [6, 7, 8];
const combinedNumbers = [...numbers, ...moreNumbers];
console.log("Об'єднані числа:", combinedNumbers);

console.log("Сума всіх чисел:", sumAll(...combinedNumbers));

const output = document.getElementById("output");
output.innerHTML = `
  <h2>${greet(name)}</h2>
  <p>Користувач: ${name}, Вік: ${age}, Місто: ${city}</p>
  <p>Хобі: ${hobbies.join(", ")}</p>
  <p>Додавання 10 + 20 = ${add(10, 20)}</p>
  <p>Множення 10 * 20 = ${multiply(10, 20)}</p>
  <p>Об'єднані числа: ${combinedNumbers.join(", ")}</p>
  <p>Сума всіх чисел: ${sumAll(...combinedNumbers)}</p>
`;
