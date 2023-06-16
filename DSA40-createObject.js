// Program to Create Objects in Different Ways

// Method-1 Using object literal
const person = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
  greet: function () {
    console.log("Hello everyone.");
  },
  score: {
    maths: 90,
    science: 80,
  },
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);

// Method-2 using Constructor Function
// function Person() {
//   (this.name = "John"),
//     (this.age = 20),
//     (this.hobbies = ["reading", "games", "coding"]),
//     (this.greet = function () {
//       console.log("Hello everyone.");
//     }),
//     (this.score = {
//       maths: 90,
//       science: 80,
//     });
// }

// const person = new Person();

// console.log(typeof person); // object

// // accessing the object value
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);
