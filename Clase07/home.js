document.addEventListener("DOMContentLoaded", function () {
    const InfoUsuario = JSON.parse(localStorage.getItem("loggedUser"));

    if (InfoUsuario) {
        const bienvenidamsj = document.getElementById("bienvenidamsj");
        bienvenidamsj.textContent = `¡Bienvenido ${InfoUsuario.name}!`;
    }
});