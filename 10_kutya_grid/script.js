/*
     <div class="card">
                <img src="./img/dog-1.jpg" alt="dog1">
                <div class="content">
                    <h3>Kártya #1</h3>
                    <p>dog-1.jpg</p>
                </div>
            </div>

            
                </div>
            </div>
*/


const cards = document.querySelector('#cards');

const LISTA_URL = 'src/kepek.txt'
const IMG_MAPPA = 'img/'

window.addEventListener('DOMContentLoaded', loadCards)

async function loadCards(){
    try{
        const res = await fetch(LISTA_URL)

        if(!res.ok){
            return alert('Nem sikerült betölteni a fájlt!')
        }
        const text = await res.text()

        const files = text.split('\n').map(sor => sor.trim()).filter(sor => sor.length > 0)

        if(files.length === 0){
            return alert('A lista üres!')
        }

        cards.innerHTML = ""

        files.forEach((fileName, index) => {
            cards.appendChild(createCard(fileName, index))
        })



    } catch(error) {
        alert(`Hiba: ${error}`)
    }
}

function createCard(fileName, index) {
    const card = document.createElement('div')
    card.className = 'card'

    const img = document.createElement('img')
    img.src = `./img/${fileName}`
    img.alt = fileName

    const content = document.createElement('div')
    content.className = 'content'

    const h3 = document.createElement('h3')
    h3.textContent = `Kártya #${index+1}`

    const p = document.createElement('p')
    p.textContent = fileName

    content.appendChild(h3)
    content.appendChild(p)

    card.appendChild(img)
    card.appendChild(content)

    return card
}

