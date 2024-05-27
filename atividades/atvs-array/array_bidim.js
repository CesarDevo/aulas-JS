// Array de elementos aleatórios
let elementos = [
    ["Carros", "Aviões", "Navios"],
    ["Rua", "Prédios", "Esquinas"],
    ["Cachorro", "Gato", "Castor"],
    ["Estrelas", "Planetas", "Nebulas"]
]

console.log(elementos);

// guardar duas células do array em duas variáveis e exibir no terminal
let transporte = elementos[0] [2];
let el_cid = elementos[1] [0];

console.log(transporte, el_cid);

//Substituir três valores do array elementos e exibir no terminal
elementos[0] [2] = "Cruzeiros";
elementos[1] [0] = "Avenidas";
elementos[3] [0] = "Astros";

console.log(elementos);