// Funcion sin parametro
function saludar(){
    console.log("Hola Mundo"); // No hace nada porque no la manda llamar
}

saludar(); // Requiriendo la función saludar y ahora si ejecuta

// Función con parámetros
function saludaralguien(nombre){
    console.log("Hola", nombre);
}

saludaralguien("Joel");
saludar();

// Función con valor por defecto
function saludarinvitado(nombre = "invitado"){
    console.log("Hola, bienvenido ", nombre);
}

saludarinvitado();

// Función retorna
function multiplicar(a, b){
    return a * b;
}

let resultado = multiplicar (63, 20);
console.log(resultado);

// Función anónima: para acciones cortas y rápidas, permite meter funciones en otra función.
const anonima = function(){
    console.log("Hola a todos");
}
anonima();

// Callback: Temporizador de 3s al mensaje
setTimeout(function(){
    console.log("Este comentario va a tener un tiempo de espera");
}, 3000);

// Arrow functions
const arrowFunction = () => {
    console.log("Hola es una flecha =>");
}
arrowFunction();

// Llamar elemento de documento (index) para agregarle funcionalidad
document.getElementById("boton").addEventListener("click", function(){
    alert("No toques el boton")
})