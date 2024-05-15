function mediaAluno() {
    console.log("Olá, Alunos!")
}

function mediaAlunoIos(n1 = 0, n2 = 0) { // os parâmetros recebem 0
    let media =(n1 + n2) / 2;
    return media; // precisa retornar um valor númerico
}

console.log(mediaAlunoIos()); // chama a função