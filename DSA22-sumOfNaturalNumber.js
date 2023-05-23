// Program to Find the Sum of Natural Numbers

//Method-1
// function sumOfNaturalNumber(number) {
//   // looping from i = 1 to number
//   let sum = 0;

//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log('The sum of natural numbers:', sumOfNaturalNumber(100));

// Method-2
function sumOfNaturalNumber(number) {
    // looping from i = 1 to number
    let sum = 0;
    let i = 1;
  
    while(i <= number) {
        sum += i;
        i++;
    }
    return sum;
  }
  console.log('The sum of natural numbers:', sumOfNaturalNumber(100));