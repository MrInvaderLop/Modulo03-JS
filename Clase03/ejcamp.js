// Prácticas de Campus

// Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.
let numero = 10;
for (let i = 1; i <= 10; i++,numero--){
    console.log(numero);
}

// Suma de Pares: Modifica el ciclo para que solo sume los números pares del 1 al 20 y muestre el resultado.
let suma = 1;
for(let i=1; i <= 20; i++){
    if(suma % 2 === 0){
        console.log(suma);
    } suma++
}



/*
let suma = 0; 
let numero = 1; 

    while (suma < 5) { 
        suma += numero; numero++; 
    } console.log(suma);

let incremento = 0;
while(incremento <= 10){
    console.log(incremento);
    incremento++;
}

let abajo = 20;

while(abajo >= 0){
    console.log(abajo);
    abajo--;
}

let x = 0;
while(x <= 20){
    console.log(x);
    x++;
}

let number = 0;
while(number <= 20){
    if(number % 2 === 0){
        console.log(number);
    }
    number++;
}

for (let i = 0; i < 3; i++) { console.log("Hola"); }

let suma = 0; 
for (let i = 1; i <= 5; i++) { 
    suma += i; 
} console.log(suma);


let suma = 0;
if(suma % 2 === 0){
        for(let i = 1; i <= 10; i++){
        console.log(suma);
    }
    suma++ 
}
    */
