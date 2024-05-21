let numbers = [1, 2, 3, 4, 5];

let pares = numbers.filter((par) => {
    return par % 2 == 0;
});

console.log(pares);