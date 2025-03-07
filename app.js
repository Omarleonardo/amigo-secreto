let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreAmigo);

    actualizarListaDeAmigos();

    inputAmigo.value = '';
}

function actualizarListaDeAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `<li class="result-list">El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos = [];
}