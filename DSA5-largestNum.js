// Find the largest number among three numbers

function findLargest(a, b, c) {
  let largest;
  if (a > b && a > c) {
    largest = a;
  } else if (b > a && b > c) {
    largest = b;
  } else {
    largest = c;
  }
  return largest; // return the largest value of the function
}
// display the result
console.log(findLargest(-3, -6, -7));
