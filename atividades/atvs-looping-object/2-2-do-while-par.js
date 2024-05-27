// let n = "1"
// let m = "e"
// console.log(n / n == 1); // true
// console.log(m / m == 1); // false

let n;

do {
    n = Number(prompt("Digite sua idade: "));

} while (n < 0 || isNaN(n) == true) // repete enquanto for string ou um número negativo

alert(`Sua idade é ${n}`);