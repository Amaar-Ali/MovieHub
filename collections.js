const collections = [
    { name: "Marvel (Phase 1-5)", image: "marvel.jpg" },
    { name: "Harry Potter", image: "harrypotter.jpg" }
];

const container = document.getElementById("collections-container");

collections.forEach(collection => {
    container.innerHTML += `
        <div class="collection-card">
            <img src="../images/${collection.image}" alt="${collection.name}">
            <h3>${collection.name}</h3>
            <a href="collection-details.html?collection=${encodeURIComponent(collection.name)}">View</a>
        </div>
    `;
});
