"use strict";

function promptWithValidation(label, validateFn) {
  return function () {
    let value;
    do {
      value = prompt(label);
    } while (!validateFn(value));
    return value;
  }
}

const getName = promptWithValidation("Введіть ім'я", str => str.length > 1);
const getAge = promptWithValidation("Введіть вік", age => !isNaN(age) && +age > 0);

// Клас для зберігання особистої інформації
class PersonalInfo {
  constructor(name, age, contact) {
    this.name = name;
    this.age = parseInt(age);
    this.contact = contact;
  }

  get summary() {
    return `${this.name}, ${this.age} років. Контакт: ${this.contact}`;
  }
}

// Клас для зберігання інформації про освіту
class Education {
  constructor(school, degree, years) {
    this.school = school;
    this.degree = degree;
    this.years = years;
  }

  get summary() {
    return `${this.degree} у ${this.school} (${this.years})`;
  }
}

// Клас для зберігання інформації про досвід роботи
class Experience {
  constructor(company, role, years) {
    this.company = company;
    this.role = role;
    this.years = years;
  }

  get summary() {
    return `${this.role} у ${this.company} (${this.years})`;
  }
}

// Клас для зберігання навичок
class Skills {
  constructor(skills) {
    this.skills = skills;
  }

  get summary() {
    return this.skills.join(", ");
  }
}

// Клас для збирання всієї інформації в резюме
class Resume {
  constructor(personalInfo, education, experience, skills) {
    this.personalInfo = personalInfo;
    this.education = education;
    this.experience = experience;
    this.skills = skills;
  }

  render() {
    const resumeDiv = document.getElementById("resume");
    resumeDiv.innerHTML = `
      <h2>Резюме</h2>
      <p><strong>Особисті дані:</strong> ${this.personalInfo.summary}</p>
      <p><strong>Освіта:</strong> ${this.education.summary}</p>
      <p><strong>Досвід:</strong> ${this.experience.summary}</p>
      <p><strong>Навички:</strong> ${this.skills.summary}</p>
    `;
  }
}

document.getElementById("start").addEventListener("click", () => {
  const name = getName();
  const age = getAge();
  const contact = prompt("Введіть контактну інформацію:");

  const school = prompt("Навчальний заклад:");
  const degree = prompt("Ступінь:");
  const eduYears = prompt("Роки навчання:");

  const company = prompt("Компанія:");
  const role = prompt("Посада:");
  const workYears = prompt("Роки роботи:");

  const skills = prompt("Введіть навички через кому:").split(",").map(s => s.trim());

  const resume = new Resume(
    new PersonalInfo(name, age, contact),
    new Education(school, degree, eduYears),
    new Experience(company, role, workYears),
    new Skills(skills)
  );

  resume.render();
  localStorage.setItem("resume", JSON.stringify(resume));
});
