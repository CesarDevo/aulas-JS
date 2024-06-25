// Lista de nomes
let lista_nomes = [];
let resposta = true;

// Contador do loop
let contador = 0;

// Acrescenta um nome na lista toda vez que o usuário digita seu nome no prompt
while (resposta) {

    let nomes = prompt("Digite um nome: ");
    lista_nomes.push(nomes);

    resposta = confirm("Você deseja continuar?");

    contador = contador + 1;
}

// Exibe a lista de nomes no alert
alert(lista_nomes.join(", "));