// String
let mensaje = "Hola Mundo";
console.log(mensaje);

let mayus = "México"
console.log(mayus.toLocaleUpperCase());

let nombre = "Joel";
console.log(`Hola ${nombre}`) // Template para saludar

// Concatenaciones
console.log(`Hola ` + nombre + ` ¿Cómo estas?`) // Necesitamos espacios post y pre frase
console.log(`Hola`, nombre, `¿Cómo estas?`)

// Boolean
let esMayor = false;
console.log(esMayor && false); // Ambas condiciones deben de cumplirse para que sea true

// Arrays
let alumnos = ["Pepe", "Pedro", "Camila", "Esteban"];
console.log(alumnos[3]);

alumnos[2] = "Madeline"; // Podemos modificar el array, en este caso darle valor nuevo
console.log(alumnos);

alumnos.push("Lupe"); // También podemos añadir elementos al array, se añade al final
console.log(alumnos);

alumnos.unshift("Joel"); // Añade un elemento al inicio del array
console.log(alumnos);


console.log(alumnos.length); // Imprime cuantos elementos hay en el array.

// Números
let x = 2;
let a = x += 5
console.log(a)

// Aprobé o Reprobé
let nota = 7
const notaAprobatoria = 6 //porque es una constante

if(nota >= notaAprobatoria){
    console.log("Estas Aprobado");
} else {
    console.log("Estás Reprobado");
}

//Temperatura Usando else if
let temp = 18;

if (temp > 30) {
    console.log("Te estas derritiendo de calor")
    
} else if(temp >= 21 && temp <= 29){
    console.log("Hay un clima agradable")
} else{
    console.log("Te estas congelando")
}


// Operador ternario: Condicional en una sola línea.
let edad = 23;
let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(resultado);

// Signos de igualdad
console.log(1 === "1") // Compara el dígito y el tipo de dato. Por ello resulta false
console.log(1 == "1") // Estamos haciendo una comparación del dígito, no importa el tipo de dato

// Switch
let dia = "viernes"; // Proporcionas las posibles entradas para que se responda algo
switch(dia){
    case "lunes":
        console.log("Inicia la semana con alegría");
        break;
    case "martes":
        console.log("Martes de modo diablo");
        break;
    case "miercoles":
        console.log("Mitad de semana");
        break;
    case "jueves":
        console.log("Esfuerzate más, vas bien");
        break;
    case "viernes":
        console.log("Viene el fin de semana rey");
        break;
    case "sabado":
        console.log("Al gimnasio y a descansar");
        break;
    case "domingo":
        console.log("Recuerda ir a la iglesia");
        break;
    default:
        console.log("No tengo idea de que día es hoy rey")
}


// Ejercicio en clase

let mes = "Octubre"
switch(mes){
    case "Enero":
        console.log("Invierno");
        break;
    case "Febrero":
        console.log("Invierno");
        break;
    case "Marzo":
        console.log("Primavera");
        break;
    case "Abril":
        console.log("Primavera");
        break;
    case "Mayo":
        console.log("Primavera");
        break;
    case "Junio":
        console.log("Verano");
        break;
    case "Julio":
        console.log("Verano");
        break;
    case "Agosto":
        console.log("Verano");
        break;
    case "Septiembre":
        console.log("Otoño");
        break;
        case "Octubre":
        console.log("Otoño");
        break;
    case "Noviembre":
        console.log("Otoño");
        break;
    case "Diciembre":
        console.log("Invierno");
        break;
}

