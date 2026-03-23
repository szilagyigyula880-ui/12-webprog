const API_URL = "https://akabab.github.io/starwars-api/api/all.json"

async function loadCharacters() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
        const characters = data.slice(0,40);
        characters.forEach((char) => {
            const card = document.createElement("article");
            card.className = "card";

            card.innerHTML = `<div class"card-img-wrap">
                                <img src"${chard.image}" alt="${char.name}" loading="lazy>
                              </div>
                              <div class="card-content">
                               <div>
                                <div class="card-name">${char.name}</div>
                                <div class="card-bar"></div>
                                <div class="card-meta">
                                <span>Faj: ${char.species || "ismeretlen"}</span>
                                <span>Homeworld: ${char.homeworld || "ismeretlen"}</span>
                                </div>
                                </div>
                                </div>`;
                                gallery.appendChild(card);
        });
    } catch (err)  {
        console.error(err);

        document.getElementById("gallery").textContent = "Hiba történt az adatok betöltésekor."
    }

}
loadCharacters();