//Array donde se almcenan los participantes del juego 
let participantes= [];
//funcion para agregar un amigo a la lista 
function agregarParticipante() {
    const nombre = document.getElementById("amigo").value.trim();//obtiene el valor del impu 
    if(nombre&& !amigos.incluides(nombre)){
        amigos.push(nombre); //agrega el nombre del array de los amigos
        actualizarLista();//llama la funcion para actualizar la lista de la pagina 
        document.getElementById("amigo").value = "";//limpia el input de nombre 
    }
    //Actualizar lista de amigos 
    function actualizarLista() {
        const lista = document.getElementById("listaAmigos"); // Obtiene el contenedor de la lista
        lista.innerHTML = ""; // Limpia la lista antes de actualizarla
    
        amigos.forEach(amigo => {
            const li = document.createElement("li"); // Crea un nuevo elemento de lista
            li.textContent = amigo; // Asigna el nombre al nuevo elemento de lista
            lista.appendChild(li); // Añade el elemento a la lista
        });
    }
    //funcion para el sorteo del amigo secreto 
    function sortearAmigo(){
        if(amigos.length < 2){
            alert("Se necesita al menos 2 amigos para hacer el sorteo!");
            return;
        }
        //copia del array de amigos para mezclarlo
        let sorteados = [...amigo];
        //mezcla aleatoriamente el array
        sorteados.sort(() => Math.random()-0.5);
        //verifica que no haya coincidencias 
        while (tieneConcidencias (sorteados)){
            sorteados.sort(() => Math.random () -0.5 ); //vuelve a mezclar si alguien se asigno a mismo 
        }
        mostrarResultados(sorteados);//muestra el resultado del sorteo 
    }
    
