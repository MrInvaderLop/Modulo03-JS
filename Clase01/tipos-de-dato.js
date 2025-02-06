// Bienvenidos a la Práctica 01

// Un ejercicio básico imperdible
console.log("Hola Mundo");

// Tipos de datos Primitivos //
    let nombre = "Joel"; // String
    let edad = 19; // Number
    let esMayordeEdad = true; // Boolean
    let cuenta = null; // Null
    let saldo; // Undefined
    let numeroGrande = 1548461296118485n; // Biginit
    let id = Symbol("id"); // Symbol


    // Running code: Determina el tipo de datos
    console.log(typeof nombre);
    console.log(typeof edad);
    console.log(typeof esMayordeEdad);
    console.log(typeof cuenta);
    console.log(typeof saldo);
    console.log(typeof numeroGrande);
    console.log(typeof id);

    // Running code: Imprime los datos
    console.log(nombre);
    console.log(edad);
    console.log(esMayordeEdad);
    console.log(cuenta);
    console.log(saldo);
    console.log(numeroGrande);
    console.log(id);


// Tipos de datos Compuestos

    /** Un arreglo de datos de tipo "Object" que funciona como objeto
     *  Nota: Guarda la información de una persona
    */
    let persona = {
        nombre: "Joel",
        edad: 19,
        altura: 179,
        casado: false,
        nacionalidad: "Mexicano"
    };

    // Datos de tipo "Array"
    let primos = [
        2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53
    ];

    // Una variable "Function" para realizar operaciones
    let suma = function suma(a,b) {
        return a + b};

    // Dato tipo "Date"
    let fecha = new Date();

    //Run Code: Datos compuestos
    console.log(persona.nacionalidad);
    console.log(primos[7]);
    console.log(suma(999,1));
    console.log(fecha);

    
//Mis experimentos

    let perros = 13;
    let habitantesmundo = 8200000000;
    let nada;
    let todo = null;

    console.log(typeof perros);
    console.log(typeof habitantesmundo);
    console.log(typeof nada);
    console.log(typeof todo);


    let cliente = {
        id: 456,
        correo: "joel.ernestolv@gmail.com",
        tiempoenespera: null, // Object no acepta datos undefined
        active: true
    };
    console.log(cliente.correo);

    let familia = [
        "Pepe","Pecas","Pica","Papas"
    ]; // Usamos corchetes en Array
    console.log(familia[6])
