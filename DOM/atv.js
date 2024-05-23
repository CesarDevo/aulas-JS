// Criação da tag h1 no espaço do corpo
let heading = document.createElement("h1");

heading.innerHTML = "César";
document.body.appendChild(heading);

// CSS do h1
heading.style.borderTop = "solid 5px purple";
heading.style.color = "orange";

// Novo título originado do objeto window.prompt()
let newTitle = window.prompt("Digite algo para colocar no título");
heading.innerHTML = newTitle;