// Program to Display Fibonacci Sequence Using Recursion
// a series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

function fibonacciSequence(num) {
  // n = how many sequence of numbers
  if (num < 2) {
    return num;
  } else {
    return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
  }
}
const n = 5;
if (n <= 0) {
  console.log("Enter the positive number");
} else {
  for (let i = 0; i < n; i++) {
    console.log(fibonacciSequence(i));
  }
}

fibonacciSequence(5);
