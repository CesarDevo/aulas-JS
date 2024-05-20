// 0, 1, 1, 2, 3, 5, 8, 13, 21

let quant_nums = 10;

let primeiro = 0;
let segundo = 1;
let x;

for (let i = 1; i <= quant_nums; i++) {
    console.log(primeiro);
    x = primeiro + segundo;

    primeiro = segundo;
    segundo = x;

    i++;
}