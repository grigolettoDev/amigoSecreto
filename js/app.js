
let listaAmigos = [];


function adicionar(){
    let amigoElemento = document.getElementById("nome-amigo");
    if (listaAmigos.includes(amigoElemento.value)){
        document.querySelector("h1").innerHTML = `<h1 class="section__title">Não pode conter<span> nomes iguais</span></h1>`;
    } else if(amigoElemento.value==""){
        document.querySelector("h1").innerHTML = `<h1 class="section__title">Não pode ser<span> vazio</span></h1>`;
    } else{
        listaAmigos.push(amigoElemento.value);
        document.getElementById("lista-amigos").textContent = listaAmigos;
        amigoElemento.value = "";
        document.querySelector("h1").innerHTML = `<h1 class="section__title">Amigo <span>Secreto</span></h1>`;
    }
}

function sortear(){
    let listaEspelhoAmigos = listaEspelho();
    let listaAmigosTirados = [];
    let menorIndice = 0;
    let maiorIndice = listaEspelhoAmigos.length-1;
    let indiceSorteado;
    let indice = 0;
 
    if(maiorIndice>=3){
        while(indice<=listaAmigos.length-1){

            indiceSorteado = Math.floor(Math.random() * (maiorIndice-menorIndice + 1))+menorIndice;
            if(listaAmigos[indice]!=listaEspelhoAmigos[indiceSorteado]){
                listaAmigosTirados.push(listaEspelhoAmigos[indiceSorteado]);
                listaEspelhoAmigos.splice(indiceSorteado,1);
                maiorIndice = maiorIndice -1;
            } else{
                continue;
            }
            indice++;
        }
        console.log(listaAmigos);
        console.log(listaAmigosTirados);
        listaSorteio(listaAmigosTirados);
    } else{
        document.querySelector("h1").innerHTML = `<h1 class="section__title">Tem que ter um mínimo de<span> 4 amigos incluidos</span></h1>`;
    }
}

function listaEspelho(){
    let listaEspelho = [];

    for(i=0;i<=listaAmigos.length-1;i++){
        listaEspelho.push(listaAmigos[i]);
    }
    return listaEspelho;
}

function listaSorteio(listaTirados){

    let elementoHtmlLista = document.getElementById("lista-sorteio");
    elementoHtmlLista.innerHTML = "";
    let listaFinal = 0;

    for(i=0;i<=listaTirados.length-1;i++){

        if(listaFinal == 0){
            listaFinal = `<p>${listaAmigos[i]} --> ${listaTirados[i]}<br></p>`;
        } else{
            listaFinal = listaFinal + `<p>${listaAmigos[i]} --> ${listaTirados[i]}<br></p>`;
        }
        elementoHtmlLista.innerHTML = listaFinal;
    }
}

function reiniciar(){
    listaAmigos = [];
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("nome-amigo").value = "";
}

