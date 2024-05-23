// Código do professor
function mostrarSeletores() {

    // Esse método "get" seleciona o elemento com o "id" mostrado, como 'exemploId'
    const elementoId = document.getElementById("exemploId");
    console.log(elementoId.textContent);
   

    const elementosClasse = document.getElementsByClassName("exemploClasse");

    for(let i = 0; i < elementosClasse.length; i++) {
        console.log(elementosClasse[i].textContent);
    }


    // Esse método "get" seleciona a tag espeficada, como "p" para parágrafo
    const elementosTag = document.getElementsByTagName("p");

    for(let i = 0; i < elementosTag.length; i++) {
        console.log(elementosTag[i].textContent);
    }

    
    const elementosNome = document.getElementsByName("nomeInput");

    for(let i = 0; i < elementosNome.length; i++) {
        console.log(elementosNome[i].value);
    }
}