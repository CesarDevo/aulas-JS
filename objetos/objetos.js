let aluno = {
    ra: 1234,
    nome: 'Ermeson',
    idade: 20,
    grade: {
        curso: 'Dev. Web',
        grade: 'GRADE1',
        nota: 7
    },
    matriculado: true
};

let aluno2 = {
    ra: 12345,
    nome: 'Felype',
    idade: 19,
    grade: {
        curso: 'Dev. Web',
        grade: 'GRADE2',
        nota: 6.5
    },
    matriculado: true
};

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.grade.curso);

console.log(aluno2.matriculado);
console.log(aluno2.nome);
console.log(aluno2.grade.nota);