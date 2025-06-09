'use strict';

const API_URL = 'https://api.tvmaze.com/shows';
let allMovies = [];

// Функція для отримання фільмів з API
const fetchMovies = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Помилка завантаження фільмів');
    const data = await response.json();
    allMovies = data;
    renderMovies(data);
  } catch (error) {
    document.getElementById('moviesContainer').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
};

// Функція для відображення фільмів на сторінці
const renderMovies = (movies) => {
  const container = document.getElementById('moviesContainer');
  container.innerHTML = '';
  movies.forEach(({ name, image, rating, genres }) => {
    const ratingVal = rating?.average || 'немає';
    const imageUrl = image?.medium || '';
    const genreStr = genres.join(', ');
    container.innerHTML += `
      <div class="movie-card">
        <img src="${imageUrl}" alt="${name}" />
        <div>
          <h3>${name}</h3>
          <p>Рейтинг: ${ratingVal}</p>
          <p>Жанри: ${genreStr}</p>
        </div>
      </div>
    `;
  });
};

// Функція для фільтрації фільмів за назвою
const filterMovies = (query) => {
  const filtered = allMovies.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
  renderMovies(filtered);
};

// Функція для сортування фільмів за алфавітом
const sortByAlphabet = () => {
  const sorted = [...allMovies].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  renderMovies(sorted);
};

// Функція для сортування фільмів за рейтингом
const sortByRating = () => {
  const sorted = [...allMovies].sort((a, b) =>
    (b.rating.average || 0) - (a.rating.average || 0)
  );
  renderMovies(sorted);
};

document.getElementById('searchInput').addEventListener('input', (e) =>
  filterMovies(e.target.value)
);
document.getElementById('sortAlpha').addEventListener('click', sortByAlphabet);
document.getElementById('sortRating').addEventListener('click', sortByRating);

fetchMovies();
