document.getElementById

// Accediendo al nodo HTML - nodo principal
console.log(document.documentElement);

// Accediendo al nodo Head
console.log(document.head);

/* Acceder a los nodos; para hacer manipulaciones de ellos
Podremos usar la informacion a lo largo de nuestro codigo
*/

// En este ejemplo declaramos el titulo como una variable y podemos modificarlo
let titulo = document. getElementById("titulo");
titulo.innerText = "Bienvenido al sitio"

titulo.style.color = "blue"

// Crear un texto
let nuevoParrafo = document.createElement("p")
nuevoParrafo.innerText = "Es de las mejores hisotrias en mi vida"

document.body.appendChild(nuevoParrafo) //accedemos al body para agregar alli el texto y appendChild para agregar elemento hijo.
document.body.appendChild(nuevoParrafo)

// Para controlar el orden de aparicion usamos insertBefore
document.body.insertBefore(nuevoParrafo, titulo)

// Agregar tiempo de retraso a la aparicion de texto
function  retraso() { // usamos una funcion Callback
    setTimeout(() =>{
        let parrafoSecundario = document.createElement("p")
        parrafoSecundario.innerText = "Voy a aparecer 3 segundos después"
        document.body.appendChild(parrafoSecundario)
    },3000)
}

retraso()


// Agregar botón

// Mostrar elemento al presionar un botón
const user = "admin"
const password = "1234"

function agregaElementos(){
    let nuevoElemento = document.createElement(`h3`)
    nuevoElemento.innerText = "Año de publicación"
    document.body.appendChild(nuevoElemento)
}

// Función LogIn
let usuario = document.getElementById("username")
let password = document.getElementById("password")

if (usuario === user && password === pass){
    alert{`Bienvenido ${user}`
} else {
    alert{`Lo siento, no eres bienvenido`}
}
}

/* podemos poner que cuando acceda, envíe al usuario a una nueva pagina
usando */

// Podemos capturar lo que el usuario escribe en tiempo real en un campo de texto



// Ejercicios
