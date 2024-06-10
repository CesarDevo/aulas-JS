let cookie_img = document.querySelector("#cookie-image");
let contador = document.querySelector("#clicks");

let pontuacao = 0;

cookie_img.addEventListener("click", () => {
    pontuacao++;
    contador.innerHTML = `${pontuacao}`;
});