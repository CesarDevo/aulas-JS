// let paragrafo = document.getElementById("paragrafitos");

let paragrafo = document.querySelector(".seletor");
paragrafo.innerText = "Alguma coisa";


// Aramazena uma lista de classes 'paragrafitos' 
// Atribui cada classe a um elemento do forEach() e adiciona o mesmo texto para cada elemento
let paragrafos = document.querySelectorAll(".paragrafitos");

paragrafos.forEach((elements) => {
    elements.textContent = "Dudu";
});