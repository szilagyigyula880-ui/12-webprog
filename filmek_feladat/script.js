const API_URL = "https://nodejs111.dszcbaross.edu.hu/api/movie";

const gallery = document.getElementById("gallery");
const movieList = document.getElementById("movie-list");

async function loadMovies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        gallery.innerHTML = "";
        movieList.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            const movie = data[i];

            
            const li = document.createElement("li");
            li.textContent = movie.title;
            movieList.appendChild(li);

            
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = movie.image;
            img.alt = movie.title;

            const p = document.createElement("p");
            p.textContent = movie.title;

            card.appendChild(img);
            card.appendChild(p);

            gallery.appendChild(card);
        }

    } catch (error) {
        console.log("Hiba történt:", error);
    }
}

loadMovies();