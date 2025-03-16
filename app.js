//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    
    let nome = document.querySelector("input").value;

    if(nome){

        amigos.push(nome);
        
    }else{

        alert ("Por favor, insira um nome!");
    }

    limparCampo();
    atualizarLista();
    let maximo = amigos.length;
}


function sortearAmigo() {

    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${sorteado}</strong>`;
}

function limparCampo(){

    nome = document.querySelector("input");
    nome.value = "";
}

function atualizarLista(){

    let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        for (let i = 0; i < amigos.length; i++){

            let item = document.createElement("li");
            item.textContent = amigos[i];
            lista.appendChild(item); 
        }
}