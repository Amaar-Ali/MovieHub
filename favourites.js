const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function addToFavorites(title) {
    if (!favorites.includes(title)) {
        favorites.push(title);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${title} added to favorites!`);
    } else {
        alert(`${title} is already in favorites!`);
    }
}

function displayFavorites() {
    const container = document.getElementById("favorites-list");
    container.innerHTML = "";
    favorites.forEach(title => {
        container.innerHTML += `<li>${title} <button onclick="removeFromFavorites('${title}')">Remove</button></li>`;
    });
}

function removeFromFavorites(title) {
    const index = favorites.indexOf(title);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        displayFavorites();
    }
}

document.addEventListener("DOMContentLoaded", displayFavorites);
