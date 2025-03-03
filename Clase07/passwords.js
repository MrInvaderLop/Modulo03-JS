function generarContraseña() {
    const longitud = document.getElementById("longitud").value;
    const incluirMayus = document.getElementById("mayusculas").checked;
    const incluirMinus = document.getElementById("minusculas").checked;
    const incluirNumeros = document.getElementById("numeros").checked;
    const incluirSimbolos = document.getElementById("simbolos").checked;

    const caracteres = {
        mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        minusculas: "abcdefghijklmnopqrstuvwxyz",
        numeros: "0123456789",
        simbolos: "!@#$%^&*()_+-=[]{}|;:,.<>?/`~"
    };

    let conjunto = "";
    if (incluirMayus) conjunto += caracteres.mayusculas;
    if (incluirMinus) conjunto += caracteres.minusculas;
    if (incluirNumeros) conjunto += caracteres.numeros;
    if (incluirSimbolos) conjunto += caracteres.simbolos;

    if (conjunto === "") {
        document.getElementById("resultado").textContent = "Selecciona al menos un tipo de carácter.";
        return;
    }

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * conjunto.length);
        contraseña += conjunto[randomIndex];
    }

    document.getElementById("resultado").textContent = "Contraseña: " + contraseña;
}