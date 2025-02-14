const saludar = (nombre) => {
    return `Hola ${nombre}`
}
console.log(saludar(`Oscar`));

// .map para multiplicar cada elemento del array por 2
const numeros = [1,2,3,4,5,6,7,8]
const multiplicados = numeros.map(num => num * 2)
console.log(multiplicados);
