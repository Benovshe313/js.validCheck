
let login = document.getElementById('login')
let password = document.getElementById('password')
let format = document.getElementById('format')
let button = document.getElementById('button')
let output = document.getElementById('output')

button.addEventListener('click',() => {
    format.style.display = 'none';
    if (login.value.length >= 8 && password.value.length >= 8) {
        output.innerText = `Login: ${login.value} Password: ${password.value}`;
    } 
    else {
        format.style.display = 'block';
        output.innerText = ''; 
    }
})

