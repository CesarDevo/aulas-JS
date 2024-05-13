let nome = "Willian";
console.log(nome);

let turma1 = ["Derick", "Davi", "Sarah", "Fernando", "Fernanda"]; // 5 posições
//                0        1       2          3           4
console.log(turma1[2]);
console.log(typeof turma1);

// let fruteira = ["Maçã", "Banana", "Uva", "Maracujá", "Laranja", "Limão"];
// console.log(fruteira[5]);

const grupo2 = new Array ("Maju", "Felype", "Vivi", "Daniel", "Juan");
console.log(grupo2);
console.log(typeof grupo2);

// const livros_generos = new Array ("Ação", "Romance", "Comédia", "Aventura", "Suspense");
// console.log(livros_generos);
// console.log(livros_generos[3]);

const grupo3 = ["Alice", "Gustavo", "Leslie"];

const gruposTcc = [
    ["Derick", "Davi", "Sarah", "Fernando", "Fernanda"],
    ["Maju", "Felype", "Vivi", "Daniel", "Juan"],
    ["Alice", "Gustavo", "Leslie"],
    ["César", "Luigi", "Junior"]
]

console.log(gruposTcc);
console.log(gruposTcc[2] [2]);
console.log(gruposTcc[1] [1]); // índice 1 do array gruposTcc e índice 1 dessa célula

gruposTcc [3] [1] = nome;

console.log(gruposTcc);

let bonus = gruposTcc[3] [1];
// console.log(bonus);