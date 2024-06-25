// Lista de nomes e resposta padrão "Sim"
let lista_nomes = [];
let resposta = "S";

// Contador do loop
let contador = 0;

// Acrescenta um nome na lista toda vez que o usuário digita seu nome no prompt
while (resposta == "S" || resposta == "s") {

    let nomes = prompt("Digite um nome: ");
    lista_nomes.push(nomes);

    resposta = prompt("Você quer inserir mais nomes? (S ou s = Sim)");

    contador = contador + 1;
}

// Exibe a lista de nomes no alert
alert(lista_nomes.toString());