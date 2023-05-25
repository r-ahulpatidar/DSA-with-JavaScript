// Program to Check if the Numbers Have Same Last Digit

function checkSameLastDigit(num1, num2, num3) {
  // if we check the 3 numbers
  let a = num1 % 10;
  let b = num2 % 10;
  let c = num3 % 10;

  if (a == b && b == c) {
    console.log(`${num1}, ${num2} and ${num3} have same last digit.`);
  } else {
    console.log(`${num1}, ${num2} and ${num3} have different same last digit.`);
  }
}
checkSameLastDigit(55, 5, 505);
checkSameLastDigit(2, 67, 52);
