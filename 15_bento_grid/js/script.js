  const BASE_URL = 'http://nodejs1.dszcbaross.edu.hu:21003'
  const API_URL = 'http://nodejs1.dszcbaross.edu.hu:21003/api/allPictures'
  
window.addEventListener('DOMContentLoaded', fetchPictures)

async function fetchPictures(){
    const gallery = document.querySelector('#gallery')
    //console.log(gallery);
    gallery.innerHTML = ''

    try {
        const res = await fetch(API_URL)
        //console.log(res);
        const images = await res.json()
        //console.log(data);

        renderImages(images, gallery)

    } catch (error) {
        console.error(`Hiba a képek betöltésekor: ${error}`)
        const p = document.createElement('p')
        p.textContent = 'Nem sikerült betölteni a képeket.'
        gallery.append(p) 
    }
}

function renderImages(images, gallery){
     images.forEach(image => {
        const card = document.createElement('div')
        card.classList.add('card')

        card.id = image.img_id

        const img = document.createElement('img')
        img.src = `${BASE_URL}${image.img}`
        img.alt = image.name
        img.title = image.name
        img.loading = 'lazy'


        card.append(img)
        gallery.append(card)
     });
}