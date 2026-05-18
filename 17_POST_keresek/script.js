const API_URL = 'https://nodejs118.dszcbaross.edu.hu/api/auth'

//---változók---
//Változók a regisztrációhoz
const regName = document.querySelector('#regName')
const regEmail = document.querySelector('#regEmail')
const regPsw = document.querySelector('#regPsw')
const regBtn = document.querySelector('#regBtn')

//változók a loginhoz
const loginEmail = document.querySelector('#loginEmail')
const loginPsw = document.querySelector('#loginPsw')
const loginBtn = document.querySelector('#loginBtn')
const testLoginBtn = document.querySelector('#testLoginBtn')
const logoutBtn = document.querySelector('#logoutBtn')

//---eseméynek---
//Regisztráció eseménye
regBtn.addEventListener('click', register)

//---login eseménye---
loginBtn.addEventListener('click', login)

//---test---
testLoginBtn.addEventListener('click', testLogin)

//---logout---
logoutBtn.addEventListener('click', logout)

//---függvények---
//regisztráció
async function register() {
    const name = regName.value 
    const email = regEmail.value 
    const psw = regPsw.value 

    //console.log(name, email, psw);



    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ name, email, psw })
        })

        const data = await response.json()
        console.log(data,);

        if (!response.ok) {
            alert('hiba')
        }

        const registerMessage = document.querySelector('#registerMessage')
        registerMessage.textContent = data.message 

        

    } catch (error) {
        console.log(`Nem sikerült kapcsolódni a szerverhez: ${error}`);
        
    }  
}


//login
async function login() {
    const email = loginEmail.value
    const psw = loginPsw.value 


    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ email, psw })
        })

        const data = await response.json()
        console.log(data,);

        if (!response.ok) {
            alert('hiba')
        }

        const loginMessage = document.querySelector('#loginMessage')
        loginMessage.textContent = data.message 

        

    } catch (error) {
        console.log(`Nem sikerült kapcsolódni a szerverhez: ${error}`);
        
    }  
}



//test
async function testLogin() {
    
}


//logout
async function logout() {
    
}