//Array donde se almcenan los participantes del juego 
let participantes= [];
/**
 * Agrega un nuevo participante a la lista.
 * - Toma el valor del input y lo guarda en el array `participantes`.
 * - Evita agregar nombres duplicados.
 * - Luego actualiza la lista mostrada en pantalla.
 */
function agregarParticipante() {
    let nombre = document.getElementById("nombre").value.trim(); //obtiene el nombre y elimina los espacio extras
    if( nombre && !participantes.includes (nombre)){ //verifica que no este vacio y no sea repetido 
        participantes.push(nombre); // agrega el nombre al array
        actualizarLista();//Actualiza la lista
        document.getElementById("nombre").value ="";//limpia el imput 
    }
}

