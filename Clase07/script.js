//Users

const IvanUser = "Ivan"
const IvanPassword = "12345"

function LogIn(){
    const username = document.getElementById('username'), value;
    const password = document.getElementById('password'), value;
    const error = document.getElementById('error');

    if {username === IvanPassword && password === IvanPassword} {
        localStorage.setItem("loggedUser", username)
        window. location.href = "home.html"
    } else {
        error.textContent = "Usuario o contraseña incorrecta"
    }
} 