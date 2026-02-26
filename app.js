initializeApp();
function initializeApp() {
  renderMovieRow('topRatedRow', getTopRatedMovies());
  renderMovieRow('peliculas_terror', getTopRatedMovies());
  renderMovieRow('peliculas_romanticas', getTopRatedMovies());
  setupScrollButtons();
}

function renderMovieRow(containerId, movieList) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  movieList.forEach((movie, index) => {
    const card = createMovieCard(movie, index);
    container.appendChild(card);
  });
}

function createMovieCard(movie, index) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.style.animationDelay = `${index * 0.1}s`;
  
  card.innerHTML = `
    <div class="movie-card-image">
      <img src="${movie.image}" alt="${movie.title}">
      <div class="movie-card-overlay"></div>
      <div class="movie-card-hover-overlay"></div>
      <div class="movie-card-content">
        <div class="movie-card-top">
          <div class="movie-card-title">${movie.title}</div>
          <div class="movie-card-meta">
            <div class="rating-pill">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>${movie.imdbRating}</span>
            </div>
            <span>${movie.year}</span>
            <span class="maturity-pill">${movie.maturityRating}</span>
          </div>
          <div class="movie-card-genres">
            ${movie.genre.slice(0, 2).map(g => `<span class="genre-pill">${g}</span>`).join('')}
          </div>
          <div class="movie-card-description">${movie.description}</div>
        </div>
        <div class="movie-card-bottom">
          <div class="movie-card-buttons">
            <a href="reproduccionPelicula.html" class="card-btn-play" onclick="playMovie(${JSON.stringify(movie).replace(/"/g, '&quot;')})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play
            </a>
            <a class="card-btn-icon" onclick="addToList(${movie.id})">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </a>
            <a href="detalles.html" class="card-btn-icon" onclick="showDetails(${JSON.stringify(movie).replace(/"/g, '&quot;')})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4M12 8h.01"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  return card;
}
function setupScrollButtons() {
  document.querySelectorAll('.movie-row').forEach(row => {
    const leftBtn = row.querySelector('.scroll-btn-left');
    const rightBtn = row.querySelector('.scroll-btn-right');
    const container = row.querySelector('.movie-cards');

    if (leftBtn && rightBtn && container) {
      leftBtn.addEventListener('click', () => {
        container.scrollBy({ left: -900, behavior: 'smooth' });
      });

      rightBtn.addEventListener('click', () => {
        container.scrollBy({ left: 900, behavior: 'smooth' });
      });
    }
  });
}