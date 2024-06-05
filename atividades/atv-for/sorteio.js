let n;

let rand = (Math.random() * 10).toFixed(0);
// rand = 3;

alert("Adivinhe o número aleatório gerado")

while (true){
    n = parseInt(prompt("Digite um número: "));
    //n = 3;

    if (n == rand) {
        alert(`Parabéns! Você acertou!`);
        break;

    } else {
        alert(`Tente novamente.`);
    }
}