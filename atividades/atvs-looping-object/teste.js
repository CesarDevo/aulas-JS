// n = parseInt("César");
// console.log(typeof n);

// **isNaN**
let e = 'e';
let f = 2;
let g = '5';

if (isNaN(e) == true) {
    console.log(`It's **${isNaN(e)}** that e is not a number`);
}

console.log(" ");

if (isNaN(f) == false) {
    console.log(`It's **${isNaN(f)}** that f is not a number`);
}

console.log(" ");

if (isNaN(g) == true) {
    console.log(`It's **${isNaN(g)}** that g is not a number`);
} else {
    console.log(`${g} is a number`);
}