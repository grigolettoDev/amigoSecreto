
const listaAmigos = [];


function adicionar(){
    let amigoElemento = document.getElementById("nome-amigo");
    listaAmigos.push(amigoElemento.value);
    document.getElementById("lista-amigos").textContent = listaAmigos;
    amigoElemento.value = "";
}

