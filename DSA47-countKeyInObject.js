// JavaScript Program to Count the Number of Keys/Properties in an Object

// Method-1
// const student = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// let count = 0;

// // loop through each key/value
// for(let key in student) {

//     // increase the count
//     ++count;
// }

// console.log(count);

// Method-2
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// count the key/value
const result = Object.keys(student).length;

console.log(result);