// EVALUADOR DE NOTAS CON MENSAJES PERSONALIZADOS

let nota = Math.floor(Math.random()*101); //Me genera números aleatorios entre 0 y 100

//Usando una concatenación para transmitir el mensaje
console.log('Hola alumno, tu calificación es: ' + nota)

if (nota >= 90){
    console.log("¡Excelente!")
} else if (nota >= 75 && nota <= 89){
    console.log("¡Bien!")
} else if (nota >= 60 && nota <= 74){
    console.log("Suficiente")
} else {
    console.log("Reprobado")
};

// Mencionar si está aprobado o no
const notaAprobatoria = 60

if (nota >= notaAprobatoria){
    console.log("Aprobaste")
} else {
    console.log("Suerte para la próxima...")
}


