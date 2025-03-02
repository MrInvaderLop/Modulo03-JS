document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("book-form");
    const bookList = document.getElementById("book-list");

    // Cargar libros guardados al inicio
    let books = JSON.parse(localStorage.getItem("books")) || [];
    renderBooks();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Obtener valores del formulario
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = document.getElementById("year").value;
        const availability = document.getElementById("availability").value;
        const description = document.getElementById("description").value;

        // Crear objeto libro
        const newBook = { title, author, year, availability, description };

        // Agregar a la lista y guardar en localStorage
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));

        // Actualizar la lista en pantalla
        renderBooks();

        // Limpiar formulario
        form.reset();
    });

    function renderBooks() {
        bookList.innerHTML = ""; // Limpiar la lista

        //Crear lista de libros
        books.forEach((book, index) => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book");
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Año:</strong> ${book.year}</p>
                <p><strong>Disponibilidad:</strong> ${book.availability}</p>
                <p>${book.description}</p>
                <button onclick="removeBook(${index})">Eliminar</button>
            `;
            bookList.appendChild(bookItem);
        });
    }

    window.removeBook = function(index) {
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
        renderBooks();
    };
});