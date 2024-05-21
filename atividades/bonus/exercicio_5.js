let students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 25 },
    { name: 'Mark', age: 22 }
];

let studentsName = students.map((obj) => {
    return obj.name;
});

console.log(studentsName);