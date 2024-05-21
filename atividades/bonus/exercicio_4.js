let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
];

students.forEach((pessoa, id) => {
    console.log(`${id + 1} - ${pessoa.name}, ${pessoa.age} anos de idade`);
});