
let contador = 0;

// Sintaxis While
/*while(contador < 10){
    console.log(contador); // Ocasiona un búcle infinito porque la condición no incrementa
}*/

while(contador <= 10){
    console.log(contador); // Ocasiona un búcle infinito porque la condición no incrementa
    contador++; // Contador se incrementa en cada iteración
}

/* Estructura DO
Nuestro codigo se ejecuta almenos una vez antes de evaluar la condición.
Puede servir para ejecutar un mensaje antes de procesar el código*/
let numero = 0;
do{
    console.log("Ejecuto mi programa al menos una vez");
    numero++;
} while(numero <= 1);

// Sintaxis For

let variable = 0; // variable almacena la suma total
for(let i=1; i < 10; i++){ // i es las veces que se va a repetir
    variable += i
}
console.log ("La suma total es: ", variable);

// For Ejercicios
const numeros = [10, 12, 47, 88, 23] //Descubriremos cuál es el mayor, recorriendo cada elemento
for(let num of numeros){ // num almacena el elemento en cada iteración.
    console.log(num);
} // Para arrays e itereaciones recomendable usar For.

// Do While se recomienda para interacciones con el usuario.
let respuesta;

/*do{
    respuesta = prompt("Por favor ingresa un número mayor a 20");
} while(respuesta <= 20) // Con este código, se almacenará culaquier valor que el usuario introduzca (unicamente en formato string).

do{
    respuesta = parseInt(prompt("Por favor ingresa un número mayor a 20"));
} while(respuesta <= 20) // ParseInt almacenará el valor en formato de número.
*/
// Si asociamos este código con un HTML nos aparecerá una ventana para introducir los datos.

// While
let text = "Este modulo es increible porque estoy aprendiendo a programar";
let vocal = "aeiouAEIOU";
let counter = 0;
let i = 0;

while(i < text.length){ // i debe ser menor a la cantidad de caracteres de texto.
    if (vocal.includes(text[i])) {
        counter++;
    }
    i++; //i es el iterador, almacena el numero de iteraciones que estamos dando
}
console.log("El texto tiene: ", counter, " vocales")



// Ejercicios Extra

// Tabla de multiplicar: Solicitar número y desplegar su tabla
let value;


do{
    value = parseInt(prompt("Ingrese un número: "));
} while(respuesta <= 20)


// Contar los dígitos de un número


// Obtener la suma de los dígitos de un número.

// Encontrar el número mayor de un arreglo