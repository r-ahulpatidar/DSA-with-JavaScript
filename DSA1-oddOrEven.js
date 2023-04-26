// Program to check number is odd or even


function oddOrEven(num) {
  if (num % 2 == 0) {    // check the conditon num is even
    return `${num} is Even number`;
  } else {
    return `${num} is Odd number`;
  }
}

console.log(oddOrEven(-5));