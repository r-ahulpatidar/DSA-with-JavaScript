// Program to Add Two Numbers

// function addTwoNumber(a, b) {
//   return `The sum of ${a} and ${b} is ${a + b}`;
// }

// console.log(addTwoNumber(1, 4));
// console.log(addTwoNumber(3.4, 6.7));

// if there are many argument passed to the function and we are sum the all argument

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let z = sumAll(4, 9, 16, 25, 29, 100, 66, 77);
console.log(z);