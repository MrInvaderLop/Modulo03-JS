// Funcion Scope
function saludo(){
    let mensaje = "Hola a todos!!"
    console.log(mensaje);
}

saludo()
//console.log(mensaje); no podríamos usar mensaje porque al usar let solo funciona la variable dentro de ese bloque.


// Block Scope
if(true){
    var blockscope = "Solo existe en este bloque" //usando var podremos usar la variable fuera del bloque, pero puede generar errores.
    console.log (blockscope);
}
console.log(blockscope);



/* Ejecicio de Palindromos: palabras que se leen igual al derecho y al revés
Una función que verifica si una palabra es palindorma o no*/

let palabra = "Ana"

palabra.split(); //Toma una palabra y separa los caracteres en varios strings
// palabra.invert();  Toma la palabra y la invierte.

// Filtrar los números mayores de un número

// Area de un circulo
const pi = 3.1416
let radio = 5
let radiocuadrado = (radio*radio) //se utiliza Math.pow para el cuadrado de cualquier número
//Math.PI para poner el valor de pi.

function area(a, b){
    return a * b;
}

let resultado = multiplicar (63, 20);
console.log(resultado);



// Escoger un ejercicio de los anteriores y convertirlo a funcion

// Crear la operaciones básicas como funciones