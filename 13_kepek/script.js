window.addEventListener('DOMContentLoaded', fetchData)

async function fetchData(){
    try {
        let images = []
        const URL ='https://picsum.photos/v2/list'
        const res = await fetch(URL)
        images = await res.json()
        console.log(res);
        loadAuthors(images)
        displayImages(images)


    } catch (error) {
        console.log(error)
    }
}

function displayImages(images){
    const tarolo = document.querySelector('#tarolo')
    console.log(tarolo);
    tarolo.innerHTML=''
    
    images.forEach((image) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const cardInner = document.createElement('div')
        cardInner.classList.add('card-inner')

        const img = document.createElement('img')

        img.classList.add('img')
        img.alt = image.author
        img.src = `https://picsum.photos/id/${image.id}/600/400`


        cardInner.append(img)
        card.append(cardInner)
        tarolo.append(card)
        console.log(tarolo);
        
    })
}


function loadAuthors(images){
    const szerzok = document.querySelector('#szerzok')
    szerzok.innerHTML = ""

    const firstOption = document.createElement('option')
    firstOption.value = ''
    firstOption.textContent = 'Összes'

    szerzok.append(firstOption)

    const authors = images.map(x => x.author)
    
    const unique = new Set(authors)
    console.log(unique);

    unique.forEach((author) =>{
        const option = document.createElement('option')
        option.value = author
        option.text  = author
        szerzok.append(option)
    })

    szerzok.addEventListener('change', () => authorFilter(images, szerzok))


}


function authorFilter(images, szerzok){
    
    const value = szerzok.value
    

    if(!value){
        return
    }

    const filteredList = images.filter((x) => x.author === value)
    displayImages(filteredList)
}