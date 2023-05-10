// Program to Check if a number is Positive, Negative, or Zero

function checkNumber(num) {
  if (num > 0) {   // check the number is postive
    return `${num} is positive`;    // display the result
  } else if (num < 0) {  // check the number is negative
    return `${num} is negative`;      // display the result
  } else {   // check when number is zero
    return `${num} is Zero`;    // display the result
  }
}

console.log(checkNumber(0));
console.log(checkNumber(5));
console.log(checkNumber(-9));
