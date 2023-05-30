// Program to Find the Factors of a Number

function findFactorOfNumber(num) {
  console.log(`The factors of ${num} is:`);
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      // check num is a facor
      console.log(i);
    }
  }
}
findFactorOfNumber(12);
