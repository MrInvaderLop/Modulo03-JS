// Objeto simple
const persona = {
    nombre: "Joel",
    edad: 19,
    ciudad: "Durango"
}
console.log(persona.nombre);

// Modificación de valores
persona.ciudad = "Ecatepec"

// Añadir valores
persona.genero = "Masculino"
persona.estatura = "1.79"

// Eliminar propiedades
delete persona.estatura;
console.log(persona)


// Objetos con métodos
const coche = {
    marca: "Tesla",
    modelo: "Model S",
    color: "blanco",

    arrancar: function() {
        console.log("El coche está arrancando")
    } // Tenemos un método, es decir acciones que realizan nuestros objetos
}
console.log(coche.marca)
console.log(coche)
coche.arrancar(coche) // Así se llama a los métodos para que se muestren

// Método abreviado
const calculadora = {
    suma(x,y){
        return x + y
    }
}
console.log(calculadora.suma(70,24));


// Objetos anidados
const trabajo = {
    nombre: "BBVA",
    puesto: "Portafolio Manager",
    ubicacion: {
        ciudad: "CDMX",
        calle: "Reforma",
        pais: "México"
    }
}
console.log(trabajo.ubicacion);
console.log(trabajo.ubicacion.calle);
console.log(trabajo["ubicacion"]["pais"]); // otra nomenclatura

//modificamos el objeto anidado
trabajo.ubicacion.calle = "Reforma, Cuauthemoc";
console.log(trabajo.ubicacion.calle);



// THIS: Palabra reservada para hacer referencia al elemento de ejecucion en el cual se encuentra.
const usuario = {
    nombre: "Saul",
    saludar: function(){
        console.log(`Hola soy ${this.nombre}`);
    }
}
usuario.saludar();

// Clases: molde de objetos
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

// crea los objetos que irán dentro de la clase
const personaIvan = new Persona("Ivan", 23)
personaIvan.saludar()

const personaJoel = new Persona("Joel", 19)
personaJoel.saludar()


/* Ejercicio: Somos de sistemas de una escuela y queremos hacer una base de datos de alumnos y profesores
Usando extend las propiedades del padre se heredarán a los hijos*/
class Estudiante extends Persona{
    constructor(nombre, edad, genero, carrera, promedio){
        super(nombre, edad, genero) //super es palabra reservada para herencia de una clase a otra, hace referencia a la clase padre
        this.carrera = carrera; //en este objeto solo se definen los que no se heredarán
        this.promedio = promedio;
    }

    estudiar(){
        console.log(`${this.nombre} está estudiando en ${this.carrera}`);
    }
}

const AnaPaola = new Estudiante("Ana", 24, "Femenino", "Enfermería");
AnaPaola.estudiar();
AnaPaola.saludar();
