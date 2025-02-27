document.addEventListener("DOMContentLoaded", function () {
    // Función para obtener la fecha actual
    function obtenerFechaActual() {
        const fecha = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opciones);
    }

    // Función para generar un número aleatorio entre 10 y 30 en el clima
    function obtenerClimaAleatorio() {
        return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    }

    // Insertar la fecha y el clima en los elementos correspondientes
    document.getElementById("fecha-actual").textContent = "Hoy es " + obtenerFechaActual();
    document.getElementById("clima").textContent = obtenerClimaAleatorio() + "°C";
});