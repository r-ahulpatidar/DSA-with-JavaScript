// Find the largest number among three numbers

// function findLargest(a, b, c) {
//   let largest;
//   if (a > b && a > c) {
//     largest = a;
//   } else if (b > a && b > c) {
//     largest = b;
//   } else {
//     largest = c;
//   }
//   return largest; // return the largest value of the function
// }
// // display the result
// console.log(findLargest(-3, -6, -7));

function findMax(...args) {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(1, 123, 500, 115, 44, 88));
