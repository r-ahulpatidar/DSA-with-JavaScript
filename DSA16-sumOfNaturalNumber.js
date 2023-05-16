// Program to Find the Sum of Natural Numbers (Take input from users)
// Natural numbers are the numbers that are used for counting and are a part of real numbers. The set of natural numbers includes only the positive integers, i.e., 1, 2, 3, 4, 5, 6, ……….∞.

function sumOfNaturalNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return console.log("The sum of natural numbers:", sum);
}

sumOfNaturalNumber(100);  // 5050
