//Users
const users = [
    {name: "Ivan Garcia", username: "ivanfou", password: "1234", image: "https://images.pexels.com/photos/7739815/pexels-photo-7739815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name: "Joel López", username: "joelop", password: "abcd", image: "https://images.pexels.com/photos/5209729/pexels-photo-5209729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name: "Homero Guerrero", username: "homegue", password: "6789", image: "https://images.pexels.com/photos/2831624/pexels-photo-2831624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
]

function LogIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage)

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "../Clase07/home.html";
    }else{
        error.textContent = "Usuario o contraseña incorrecta"
    }
}