const citties = document.querySelector('#citties');

citties.addEventListener('change', () => {
    const selected = citties.value;
    console.log(selected);

    const demo = document.querySelector('#demo');
    demo.textContent = selected;

    const image = document.querySelector('#image');
    const img = document.createElement('img');

    img.src = `./img/${selected}.jpg`;
    img.alt = selected;
    img.title = selected;

    console.log(img);
    image.append(img);

    image.replaceChildren(img);


});