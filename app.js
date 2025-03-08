// Array donde se almacenan los participantes del juego
let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 */
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim(); // Obtiene el valor del input
    if (nombre && !amigos.includes(nombre)) { // Verifica si no está vacío y si no es repetido
        amigos.push(nombre); // Agrega el nombre al array de amigos
        actualizarLista(); // Llama a la función para actualizar la lista en la página
        document.getElementById("amigo").value = ""; // Limpia el input de nombre
    }
}

/**
 * Actualiza la lista de amigos en el HTML.
 */
function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtiene el contenedor de la lista
    lista.innerHTML = ""; // Limpia la lista antes de actualizarla

    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Crea un nuevo elemento de lista
        li.textContent = amigo; // Asigna el nombre al nuevo elemento de lista
        lista.appendChild(li); // Añade el elemento a la lista
    });
}

/**
 * Función para realizar el sorteo de amigo secreto y mostrar un solo nombre aleatorio.
 */
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡Se necesitan al menos 2 amigos para hacer el sorteo!");
        return;
    }

    // Selecciona un amigo aleatorio
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Muestra el resultado con el mensaje "El amigo secreto sorteado es: [nombre]"
    mostrarResultado(amigoSorteado);

    // Oculta la lista de amigos después del sorteo
    document.getElementById("listaAmigos").style.display = "none";
}

/**
 * Muestra el resultado con el amigo secreto sorteado en el HTML.
 */
function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpia cualquier contenido anterior

    // Muestra el mensaje con el nombre del amigo sorteado
    resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

/**
 * Función para reiniciar el juego y mostrar la lista nuevamente.
 */
function reiniciarJuego() {
    amigos = []; // Vacía el array de amigos
   actualizarLista(); // Limpia la lista de amigos en el HTML
   document.getElementById("listaAmigos").style.display = "block"; // Muestra la lista de amigos nuevamente
    document.getElementById("resultado").innerHTML = ""; // Limpia los resultados del sorteo
   document.getElementById("amigo").value = ""; // Limpia el campo de entrada de nombre
 }
