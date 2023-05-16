// Program to Find the Factorial of a Number

// Method-1
// function findFactorial(num) {
//   let result = 1;
//   for (let i = num; i > 0; i--) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(findFactorial(4));
// console.log(findFactorial(6));

// Method-2
// function findFactorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(findFactorial(4));
// console.log(findFactorial(6));

// method-3 using recursion
// function findFactorial(num) {
//   if (num == 1) {
//     return num;
//   }
//   return num * findFactorial(num - 1);
// }
// console.log(findFactorial(4));
// console.log(findFactorial(6));

// Method-4 using recursion and midified
function findFactorial(num) {
  if (num == 1) {
    return 1; // Termination condition
  }
  if (num == 0 || num < 0) {
    return 0; // Termination condition
  }
  return num * findFactorial(num - 1);
}
console.log(findFactorial(5)); // 120
console.log(findFactorial(12)); // 479001600
console.log(findFactorial(1));
console.log(findFactorial(0));
console.log(findFactorial(-78));
