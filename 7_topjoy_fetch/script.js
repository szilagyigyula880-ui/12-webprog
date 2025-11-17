const messages = [];
const messageBox = document.querySelector('#messageBox');
const messageButton = document.querySelector('#messageButton');
//console.log(messages, messageBox, messageButton);

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const uzik = await fetch('./uzik.csv');
        const uzikText = await (await uzik.text()).split('\n').map(sor => sor.trim())
        console.log(uzik);
        

        uzikText.forEach(uzi =>{
            messageBox.push()
        })

        

    } catch (error) {
        console.error(error);
    }
});

