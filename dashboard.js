

const container = document.getElementById("featured-movies");
  
  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title} Poster">
      <h3>${movie.title}</h3>
    `;
    card.addEventListener("click", () => {
      // Save the selected movie data in localStorage
      localStorage.setItem("selectedMovie", JSON.stringify(movie));
      // Redirect to the movie details page
      window.location.href = "movie.html";
    });
    container.appendChild(card);
  });
  const movieContainer = document.getElementById("movieContainer");

movies.forEach(movie => {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie");

  movieElement.innerHTML = `
    <img src="${movie.image}" alt="${movie.name}">
    <h3>${movie.name}</h3>
    <p>${movie.description}</p>
    <p>Rating: ${movie.rating}</p>
    <a href="${movie.link}">Watch Now</a>
  `;

  movieContainer.appendChild(movieElement);
});

