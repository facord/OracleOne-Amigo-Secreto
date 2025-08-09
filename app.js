let listaDeNomesInseridos = [];

//verificar se valor inserido é número ao invés de texto
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//adicionar nome de amigo a lista
function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim();
    if (isNumber(nome)==true){
        alert("Por favor, insira um nome válido.");
    } else{
        if (nome) { // só adiciona se não estiver vazio
            listaDeNomesInseridos.push(nome);
            
            // Monta a lista em HTML
            let listaHTML = '';
            for (let amigo of listaDeNomesInseridos) {
                listaHTML += `<li>${amigo}</li>`;
            }
            
            document.getElementById('listaAmigos').innerHTML = listaHTML;
        }else{
            alert("Por favor, insira um nome válido.");
        }
    }
    // Limpa o campo de entrada
    document.querySelector('input').value = '';
}

//sorteio de nome do Amigo Secreto.
function sortearAmigo(){
    let numeroLimite = listaDeNomesInseridos.length;
    let numeroEscolhido = Math.floor(Math.random() * numeroLimite);
    nomeSorteado=listaDeNomesInseridos[numeroEscolhido];
    document.getElementById('resultado').innerHTML = "O amigo secreto sorteado é " + nomeSorteado;
    document.getElementById('listaAmigos').innerHTML = "";
}
