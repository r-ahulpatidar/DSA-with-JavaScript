// JavaScript Program to Merge Property of Two Objects

// Method-1
// object 1
// const person = {
//     name: 'Jack',
//     age:26
// }

// // object 2
// const student = {
//     gender: 'male'
// }

// // merge two objects
// const newObj = Object.assign(person, student);

// console.log(newObj);

// Method-2
// object 1
const person = {
    name: 'Rahul',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = {...person, ...student};

console.log(newObj);