document.addEventListener("DOMContentLoaded", () => {
  const movieData = localStorage.getItem("selectedMovie");
  if (!movieData) {
    window.location.href = "dashboard.html";
    return;
  }
  const movie = JSON.parse(movieData);
  const container = document.querySelector(".movie-details-container");

  container.innerHTML = `
    <div class="movie-details-card">
      <div class="details-poster">
        <img src="${movie.poster}" alt="${movie.title} Poster" />
      </div>
      <div class="details-info">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <div class="action-buttons">
          <a href="${movie.link}" target="_blank" class="btn watch-btn">Watch Now</a>
          <button class="btn fav-btn" onclick="addToFavorites('${movie.title}')">Add to Favorites</button>
        </div>
      </div>
    </div>
  `;
});

// Dummy function – replace with your actual favorites logic
function addToFavorites(title) {
  alert(`${title} added to favorites!`);
}
