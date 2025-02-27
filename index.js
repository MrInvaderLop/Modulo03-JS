//Mostrar fecha actual en nav
function mostrarFecha() {
    const fechaElemento = document.getElementById("fecha-actual");
    const fecha = new Date();
    
    // Formato: Día de la semana, Día Mes Año
    const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    
    fechaElemento.textContent = fechaFormateada;
}

// Llama a la función cuando la página cargue
document.addEventListener("DOMContentLoaded", mostrarFecha);