// Program to Find HCF or GCD

// Method-1
function findHCF(number1, number2) {
  let hcf; // hcf and gcd both are same

  for (let i = 1; i <= number1 && i <= number2; i++) {
    // check if is factor of both integers
    if (number1 % i == 0 && number2 % i == 0) {
      hcf = i;
    }
  }
  // display the hcf
  return console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);
}

findHCF(60, 72);
findHCF(56, 72);


//Method-2
// looping until both numbers are equal
// function findHCF(number1, number2) {
//   while (number1 != number2) {
//     if (number1 > number2) {
//       number1 -= number2;
//     } else {
//       number2 -= number1;
//     }
//   }
// }
// // display the hcf
// console.log(`HCF is ${number1}`);