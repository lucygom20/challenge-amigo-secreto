// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// PASO 1: Crear un array para almacenar los nombres
let amigos = [];

// PASO 2: Implementa una función para agregar amigos
function agregarAmigo() {

    // 2.1. Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // 2.2. Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 2.3. Actualizar el array de amigos
    amigos.push(nombre);

    // 2.4. Limpiar el campo de entrada
    input.value = "";

    mostrarLista();
}

// PASO 3: Implementa una función para actualizar la lista de amigos
function mostrarLista() {

    // 3.1. Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // 3.2. Limpiar la lista existente
    lista.innerHTML = "";

    // 3.3. Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// PASO 4: Implementa una función para sortear los amigos
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // 4.1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // 4.2. Generar un índice aleatorio:
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // 4.3. Obtener el nombre sorteado
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong> </li>`;

    // 4.4. Mostrar el resultado
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

