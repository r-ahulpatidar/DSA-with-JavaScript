// Program to Check if a Key Exists in an Object

// Method-1
// const person = {
//   id: 1,
//   name: "John",
//   age: 23,
// };

// // check if key exists
// const hasKey = "name" in person;

// if (hasKey) {
//   console.log("The key exists.");
// } else {
//   console.log("The key does not exist.");
// }

// Method-2
const person = {
  id: 1,
  name: "John",
  age: 23,
};

//check if key exists
const hasKey = person.hasOwnProperty("name");


if (hasKey) {
  console.log("The key exists.");
} else {
  console.log("The key does not exist.");
}
