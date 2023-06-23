// Program to Loop Through an Object

// Method-1
// const student = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
// };

// // using for...in
// for (let key in student) { 
//     let value;

//     // get the value
//     value = student[key];

//     console.log(key + " - " +  value); 
// } 

// Method-2
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using Object.entries
// using for...of loop
console.log(Object.entries(student));
for (let [key, value] of Object.entries(student)) {  // Object.entries(student) return [['name', 'John'], ['age', 20], ['hobbies', ['reading', 'games', 'coding;]]]
    console.log(key + " - " +  value);
}