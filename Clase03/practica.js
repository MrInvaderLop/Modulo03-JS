// Clasificación de Frutas
/*Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while). */

let frutasRojas = ["Fresas", "Manzanas", "Cerezas", "Frambuesas", "Sandías"];
let frutasCitricas = ["Naranjas", "Limones", "Mandarinas", "Toronjas"];
let frutasTropicales = ["Plátanos", "Mangos", "Piñas", "Papayas", "Maracuyás", "Guayabas"];
let frutasDeArbol = ["Peras", "Manzanas", "Ciruelas", "Higos"];
let frutasDelBosque = ["Moras", "Arándanos"];
let frutasCascaraDura = ["Calabazas", "Melones", "Cocos"];
let frutasExoticas = ["Lichis", "Pitahaya", "Mangostán"];
let frutasConHueso = ["Duraznos", "Albaricoques", "Ciruelas"];

let todasLasFrutas = [
    ...frutasRojas,
    ...frutasCitricas,
    ...frutasTropicales,
    ...frutasDeArbol,
    ...frutasDelBosque,
    ...frutasCascaraDura,
    ...frutasExoticas,
    ...frutasConHueso
];

// Investigando descubrí la manera adecuada de hacerlo: usando categorías
let categorias = [
    { nombre: "frutas rojas", lista: frutasRojas },
    { nombre: "frutas cítricas", lista: frutasCitricas },
    { nombre: "frutas tropicales", lista: frutasTropicales },
    { nombre: "frutas de árbol", lista: frutasDeArbol },
    { nombre: "frutas del bosque", lista: frutasDelBosque },
    { nombre: "frutas de cáscara dura", lista: frutasCascaraDura },
    { nombre: "frutas exóticas", lista: frutasExoticas },
    { nombre: "frutas con hueso", lista: frutasConHueso }
];

//Ahora sí podremos contar cuantás hay en cada categoría usando ciclos
for (let categoria of categorias){ // notemos que for...of nos permite recorrer los elementos de objetos iterables, como arrays y strings.
    let cantidad = categoria.lista.length;
    console.log(`Tenemos ${cantidad} ${categoria.nombre}`);
}

// Imprimiremos también el total de frutas
console.log(`En total hay ${todasLasFrutas.length} frutas en nuestra frutería`);
