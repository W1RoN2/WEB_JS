"use strict";

const btn = document.getElementById("loadPokemonBtn");
const infoDiv = document.getElementById("pokemonInfo");

btn.addEventListener("click", async () => {
  const input = prompt("Введіть ім'я або ID покемона:");

  if (!input) {
    alert("Ви не ввели ім'я або ID.");
    return;
  }

  infoDiv.innerHTML = "Завантаження...";

  try {
    // Робимо запит до API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase().trim()}`);

    if (!response.ok) {
      throw new Error("Покемон не знайдений.");
    }

    const data = await response.json();

    // Формуємо HTML для відображення даних
    const pokemonHTML = `
      <div class="pokemon-name">${data.name}</div>
      <img class="pokemon-image" src="${data.sprites.front_default}" alt="${data.name}" />
      <div class="pokemon-stats">
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Висота:</strong> ${data.height}</p>
        <p><strong>Вага:</strong> ${data.weight}</p>
        <p><strong>Типи:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Статистика:</strong></p>
        <ul>
          ${data.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join("")}
        </ul>
      </div>
    `;

    infoDiv.innerHTML = pokemonHTML;
  } catch (error) {
    infoDiv.innerHTML = `<p style="color:red;">Помилка: ${error.message}</p>`;
    console.error(error);
  }
});
