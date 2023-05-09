// Program to Check Prime Number

function checkPrime(number) {
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");   // display the result
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);   // display the result
    } else {
      console.log(`${number} is a not prime number`);   // display the result
    }
  }

  // check if number is less than 1
  else {
    console.log("The number is not a prime number.");  // display the result
  }
}

checkPrime(1);
checkPrime(-9);
checkPrime(27);
checkPrime(19);
checkPrime(5);
