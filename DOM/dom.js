// window.alert("Exiba uma mensagem na janela");
// alert("Exiba uma mensagem na janela"); // são iguais

document.title = 123; // título da aba 123

// Criar um elemento <h1>
let heading = document.createElement("h1"); // tag h1
heading.innerHTML = 'Olá, alunos!'; // <h1> Olá, alunos! </h1>

document.body.appendChild(heading); // h1 inserido dentro do body pelo appendChild()

heading.style.borderBottom = "solid 3px #000";
heading.style.color = "red";
heading.style.color = "blue";