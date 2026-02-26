initializeApp();
function initializeApp() {
  renderMovieRow('topRatedRow', getTopRatedMovies());
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
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
            <button class="card-btn-play">
              <svg width="16" height="16" >
                <path
                    d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
              </svg>
              Play
            </button>
            <button class="card-btn-icon" >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-plus-lg me-1" viewBox="0 0 13 16">
                                <path fill-rule="evenodd"
                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
            </button>
            <button class="card-btn-icon">
              <svg width="35" height="20" fill="currentColor"
                                class="bi bi-info-circle me-2" viewBox="0 0 9 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </button>
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
