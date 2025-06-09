"use strict";


// Вибір елементів DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");

console.log(taskInput, addTaskButton, taskList); 

addTaskButton.addEventListener("click", function () {
  console.log("Кнопку натиснуто!");

  const taskText = taskInput.value.trim(); 

  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    console.log("Додано завдання:", taskText);
    taskInput.value = ""; 
  } else {
    console.log("Поле завдання порожнє");
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Видалено завдання:", event.target.textContent);
    taskList.removeChild(event.target);
  }
});


