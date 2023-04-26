// Program to Find the Square Root of given Number

// function squareRoot(num) {
//   if (num < 0) {
//     return `${num} is negative number`;
//   } else {
//     return num ** 0.5;
//   }
// }
// console.log(squareRoot(625));
// console.log(squareRoot(-25));


function squareRoot(num) {
    if (num < 0) {
        return `${num} is negative number`;
    } else {
        return Math.pow(num, 0.5);    // also we used Math.sqrt(num)
    }
}
console.log(squareRoot(625));
console.log(squareRoot(-25));