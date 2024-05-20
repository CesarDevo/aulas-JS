function testeLog() {
    console.log("Olá, Alunos!")
}

function mediaAlunoIos(n1 = 0, n2 = 0) { // os parâmetros recebem 0
    let media =(n1 + n2) / 2;
    return media; // precisa retornar um valor númerico
}

function apresentar() {
    console.log(`Olá, Mundo!`);
}

// console.log(mediaAlunoIos(5, 10)); // chama a função
apresentar();

// Arrow Function
const mediaAluno = (n1 = 0, n2 = 0, rep = 0) => {
    let media = (n1 + n2 + rep) / 3;
    return media;
}

console.log(mediaAluno(8, 6.6, 10).toFixed(1));