let librosLeidos = ["Los despodeídos", "Hábitos atómicos", "Orgullo y prejuicio", "Álgebra lineal", "Crepúsculo", 
    "El oficio del sociólogo", "How to solve it", "Crónica de una muerte anunciada"];

    function mostrarLibros() {
        let lista = document.getElementById("listaLibros");
        lista.innerHTML = ""; // Limpiar la lista antes de agregar

        librosLeidos.forEach(libro => {
            let item = document.createElement("li");
            item.textContent = libro;
            lista.appendChild(item);
        });
    }

    function agregarLibro() {
        let input = document.getElementById("nuevoLibro");
        let nuevoLibro = input.value.trim(); // Eliminar espacios en blanco

        if (nuevoLibro) {
            librosLeidos.push(nuevoLibro); // Agregar al array
            input.value = ""; // Limpiar el input
            mostrarLibros(); // Volver a mostrar la lista actualizada
        } else {
            alert("Por favor, escribe un título válido.");
        }
    }
//Añadir elemento al array
//Eliminar elemento del array
//Mostar libros leídos
