const collections = {
    "Marvel": [
        { title: "Iron Man", year: 2008, rating: "7.9", description: "Tony Stark, a genius billionaire, builds a high-tech suit to fight evil.", poster: "../images/ironman.jpg", link: "#" },
        { title: "The Incredible Hulk", year: 2008, rating: "6.7", description: "Bruce Banner struggles with his monstrous alter ego, the Hulk.", poster: "../images/hulk.jpg", link: "#" },
        { title: "Iron Man 2", year: 2010, rating: "7.0", description: "Tony Stark faces new enemies and the government’s interest in his tech.", poster: "../images/ironman2.jpg", link: "#" },
        { title: "Thor", year: 2011, rating: "7.0", description: "The mighty Thor is cast out of Asgard and forced to live on Earth.", poster: "../images/thor.jpg", link: "#" },
        { title: "Captain America: The First Avenger", year: 2011, rating: "6.9", description: "Steve Rogers becomes Captain America and fights Red Skull.", poster: "../images/captainamerica.jpg", link: "#" },
        { title: "The Avengers", year: 2012, rating: "8.0", description: "Earth’s mightiest heroes unite to stop Loki’s invasion.", poster: "../images/avengers.jpg", link: "#" },
        { title: "Iron Man 3", year: 2013, rating: "7.1", description: "Tony Stark faces the Mandarin and deals with PTSD from The Avengers.", poster: "../images/ironman3.jpg", link: "#" },
        { title: "Thor: The Dark World", year: 2013, rating: "6.9", description: "Thor battles Malekith, who seeks to plunge the universe into darkness.", poster: "../images/thor2.jpg", link: "#" },
        { title: "Captain America: The Winter Soldier", year: 2014, rating: "7.7", description: "Steve Rogers uncovers a Hydra conspiracy within S.H.I.E.L.D.", poster: "../images/captainamerica2.jpg", link: "#" },
        { title: "Guardians of the Galaxy", year: 2014, rating: "8.0", description: "A group of intergalactic criminals must band together to stop Ronan.", poster: "../images/gotg.jpg", link: "#" },
        { title: "Avengers: Age of Ultron", year: 2015, rating: "7.3", description: "The Avengers battle Ultron, an AI bent on human extinction.", poster: "../images/avengers2.jpg", link: "#" },
        { title: "Ant-Man", year: 2015, rating: "7.3", description: "A thief gains the power to shrink in size and must stop a dangerous threat.", poster: "../images/antman.jpg", link: "#" },
        { title: "Captain America: Civil War", year: 2016, rating: "7.8", description: "The Avengers are divided when government oversight is introduced.", poster: "../images/civilwar.jpg", link: "#" },
        { title: "Doctor Strange", year: 2016, rating: "7.5", description: "A surgeon learns the mystic arts after a career-ending accident.", poster: "../images/doctorstrange.jpg", link: "#" },
        { title: "Guardians of the Galaxy Vol. 2", year: 2017, rating: "7.6", description: "The Guardians uncover the truth about Peter Quill’s father.", poster: "../images/gotg2.jpg", link: "#" },
        { title: "Spider-Man: Homecoming", year: 2017, rating: "7.4", description: "Peter Parker tries to balance high school life with being Spider-Man.", poster: "../images/spidermanhomecoming.jpg", link: "#" },
        { title: "Thor: Ragnarok", year: 2017, rating: "7.9", description: "Thor faces Hela and teams up with Hulk to escape a deadly planet.", poster: "../images/thor3.jpg", link: "#" },
        { title: "Black Panther", year: 2018, rating: "7.3", description: "T’Challa returns to Wakanda to claim his rightful place as king.", poster: "../images/blackpanther.jpg", link: "#" },
        { title: "Avengers: Infinity War", year: 2018, rating: "8.4", description: "The Avengers fight to stop Thanos from wiping out half the universe.", poster: "../images/infinitywar.jpg", link: "#" },
        { title: "Ant-Man and the Wasp", year: 2018, rating: "7.1", description: "Scott Lang teams up with Hope van Dyne on a new mission.", poster: "../images/antman2.jpg", link: "#" },
        { title: "Captain Marvel", year: 2019, rating: "6.8", description: "Carol Danvers discovers her true identity and joins the fight against the Kree.", poster: "../images/captainmarvel.jpg", link: "#" },
        { title: "Avengers: Endgame", year: 2019, rating: "8.4", description: "The Avengers go back in time to undo Thanos’ snap.", poster: "../images/endgame.jpg", link: "#" },
        { title: "Spider-Man: Far From Home", year: 2019, rating: "7.4", description: "Peter Parker faces Mysterio while traveling in Europe.", poster: "../images/spidermanfarfromhome.jpg", link: "#" }
    ],
    "Harry Potter": [
        { title: "Harry Potter and the Sorcerer’s Stone", year: 2001, rating: "7.6", description: "Harry discovers he is a wizard and attends Hogwarts.", poster: "../images/hp1.jpg", link: "#" },
        { title: "Harry Potter and the Chamber of Secrets", year: 2002, rating: "7.4", description: "Harry faces the mystery of the Chamber of Secrets.", poster: "../images/hp2.jpg", link: "#" },
        { title: "Harry Potter and the Prisoner of Azkaban", year: 2004, rating: "7.9", description: "Harry learns the truth about Sirius Black and his parents.", poster: "../images/hp3.jpg", link: "#" },
        { title: "Harry Potter and the Goblet of Fire", year: 2005, rating: "7.7", description: "Harry competes in the dangerous Triwizard Tournament.", poster: "../images/hp4.jpg", link: "#" },
        { title: "Harry Potter and the Order of the Phoenix", year: 2007, rating: "7.5", description: "Harry forms Dumbledore’s Army to fight against Voldemort.", poster: "../images/hp5.jpg", link: "#" },
        { title: "Harry Potter and the Half-Blood Prince", year: 2009, rating: "7.6", description: "Harry learns Voldemort’s weaknesses through Dumbledore.", poster: "../images/hp6.jpg", link: "#" },
        { title: "Harry Potter and the Deathly Hallows: Part 1", year: 2010, rating: "7.7", description: "Harry, Ron, and Hermione go on a mission to destroy Horcruxes.", poster: "../images/hp7.jpg", link: "#" },
        { title: "Harry Potter and the Deathly Hallows: Part 2", year: 2011, rating: "8.1", description: "Harry and friends face Voldemort in the final battle.", poster: "../images/hp8.jpg", link: "#" }
    ]
};

// Display movies
const params = new URLSearchParams(window.location.search);
const collectionName = params.get("collection");

document.getElementById("collection-title").textContent = collectionName;
const moviesList = document.getElementById("movies-list");

collections[collectionName].forEach(movie => {
    moviesList.innerHTML += `
        <div class="movie">
            <img src="${movie.poster}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>⭐ ${movie.rating}</p>
            <p>${movie.description}</p>
            <button onclick="addToFavorites('${movie.title}')">Add to Favorites</button>
            <a href="${movie.link}" target="_blank">Watch Now</a>
        </div>
    `;
});
