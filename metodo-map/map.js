let frutas = ["Banana", "Acabaxi", "Melão"];

let newFrutas = frutas.map((fruta) => {
    return fruta.toUpperCase();
});

console.log(newFrutas);

// -------------------------------------------------

// let aluno = [
//     {
//         nome: "Ermeson",
//         curso: "Dev. Web",
//         matriculado: true
//     },
//     {
//         nome: "Leslie",
//         curso: "Dev. Web",
//         matriculado: true
//     },
//     {
//         nome: "César",
//         curso: "Dev. Web",
//         matriculado: true
//     }
// ];

// console.log(aluno);

// let nomeAluno = aluno.map((objeto) => {
//     return objeto.nome;
// });

// let cursoAluno = aluno.map((objeto) => {
//     return objeto.curso;
// });

// console.log(nomeAluno);
// console.log(cursoAluno);

// ------------------------------------------

let notas =  [3, 5, 8, 7, 6];

let notasAprovadas = notas.filter((nota) => {
    return nota >= 7
});

console.log(notasAprovadas);
