// Program to Clone a JS Object

// Method-1
const person = {
    name: 'John',
    age: 21,
}
const copy = person;  // clone a js object
console.log(copy); // {name: "John", age: 21}
console.log(copy.age);

// Method-2
// cloning the object
// const clonePerson = Object.assign({}, person);

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name);  // Peter
// console.log(person.name);       // John

// Method-3
// cloning the object
// const clonePerson = { ... person}

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name); // Peter
// console.log(person.name);      // John

// Method-4
// const person = {
//     name: 'John',
//     age: 21,

//     // the inner objects will change in the shallow copy
//     marks: { math: 66, english: 73}
// }

// // cloning the object
// const clonePerson = { ... person}

// console.log(clonePerson); // {name: "John", age: 21, marks: {…}}

// // changing the value of clonePerson
// clonePerson.marks.math = 100;  

// console.log(clonePerson.marks.math); // 100
// console.log(person.marks.math); // 100

// Method-5
// cloning the object
// const clonePerson = JSON.parse(JSON.stringify(person));

// console.log(clonePerson);

// // changing the value of clonePerson
// clonePerson.name = 'Peter';

// console.log(clonePerson.name); // Peter
// console.log(person.name);      // John
