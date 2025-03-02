document.addEventListener("DOMContentLoaded", function () {
    const InfoUsuario = JSON.parse(localStorage.getItem("loggedUser"));

    if (InfoUsuario) {
        const bienvenidamsj = document.getElementById("bienvenidamsj");
        bienvenidamsj.textContent = `¡Bienvenido ${InfoUsuario.name}!`;
    }
});




document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
})

function postComment() {
    const commentText = document.getElementById('comment').value;
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString()    

        //evitar error de comentario vacío
    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacio")
        return;
    }

    //datos del comentador
    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    }

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments))

    document.getElementById('comment').value = "";

    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments'))|| [];

    commentSection.innerHTML = '';

    comments.forEach((comment, index) => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario");
        comentarioSection.innerHTML = `
            <div class="datos-comentarista">
                <div class="data">
                    <img src="${comment.image}" class="user-image"> 
                    <div>
                        <strong>${comment.name}</strong>  
                        <p class="fecha">${comment.timestamp}</p>
                    </div>
                </div>
                <button class="btn-eliminar" onclick="eliminarComentario(${index})">✘</button>
            </div>
            <p class="comentario-texto">${comment.commentText}</p>
        `;
        commentSection.appendChild(comentarioSection);
    });
}

function eliminarComentario(index) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    comments.splice(index, 1); // Eliminar el comentario según su índice

    localStorage.setItem('comments', JSON.stringify(comments));
    mostrarComentarios(); // Volver a renderizar los comentarios
}