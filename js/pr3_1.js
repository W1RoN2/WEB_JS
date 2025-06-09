"use strict";

// Клас User з методами
class User {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  display() {
    const info = ` Користувач: ${this.name}\nВік: ${this.age}\nПрофесія: ${this.profession}`;
    alert(info);
    console.log(info);
    return info;
  }
}

// Клас Admin — наслідується від User
class Admin extends User {
  constructor(name, age, profession, role) {
    super(name, age, profession);
    this.role = role;
  }

  display() {
    const info = ` Адміністратор: ${this.name}\nВік: ${this.age}\nПрофесія: ${this.profession}\nРоль: ${this.role}`;
    alert(info);
    console.log(info);
    return info;
  }
}

// Обробник кнопки
document.getElementById("startBtn").addEventListener("click", () => {
  const userType = prompt("Введіть тип користувача (user / admin):").toLowerCase();

  const name = prompt("Введіть ім’я:");
  let age = parseInt(prompt("Введіть вік:"));
  while (isNaN(age) || age <= 0) {
    age = parseInt(prompt("Некоректний вік. Спробуйте ще раз:"));
  }
  const profession = prompt("Введіть професію:");

  let resultText = "";

  if (userType === "admin") {
    const role = prompt("Введіть роль адміністратора:");
    const admin = new Admin(name, age, profession, role);
    resultText = admin.display();
  } else {
    const user = new User(name, age, profession);
    resultText = user.display();
  }

  document.getElementById("output").textContent = resultText;
});
