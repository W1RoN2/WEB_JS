function updateProfile() {
    let name = prompt("Введіть ваше ім'я:") || "Дані не вказані";
    let ageInput = prompt("Введіть ваш вік:");
    let age = ageInput ? Number(ageInput) : "Дані не вказані";
    let isStudent = confirm("Ви студент? (ОК - так, Скасувати - ні)");

    console.log(`Ім'я: ${name} (${typeof name})`);
    console.log(`Вік: ${age} (${typeof age})`);
    console.log(`Студент: ${isStudent} (${typeof isStudent})`);
    
    document.getElementById("name").textContent = name;
    document.getElementById("age").textContent = age;
    document.getElementById("student").textContent = isStudent ? "Так" : "Ні";
}
document.addEventListener("DOMContentLoaded", updateProfile);