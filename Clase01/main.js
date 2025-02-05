console.log("Hola Mundo");

//Declarando variables//
let nombre = "Joel";
let edad = 19;
let esMayordeEdad = false;
let saldo;
let cuenta = null
let id = Symbol("id")
let numeroGrande = 9999999999999

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esMayordeEdad);
console.log(typeof saldo);
console.log(typeof cuenta);
console.log(typeof id);
console.log(typeof numeroGrande);

/**Una variable que funciona como objeto
 * 
 * Nota: Guarda la información de una persona
 * 
*/
let persona = {
    nombre: "Joel",
    edad: 19,
    nacionalidad: "Mexicano"
}

let suma = function suma(a,b) {
    return a + b};
console.log(suma(2,5));

let fecha = new Date()
console.log(fecha)