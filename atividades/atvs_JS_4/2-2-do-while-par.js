// let n = "1"
// let m = "e"
// console.log(n / n == 1); // true
// console.log(m / m == 1); // false

let n;

do {
    // n = Number(prompt("Digite sua idade: "));
    n = "1";

} while ( (n < 0) || (n / n != 1)); // repete enquanto for string ou um número negativo

alert(`Sua idade é ${n}`);