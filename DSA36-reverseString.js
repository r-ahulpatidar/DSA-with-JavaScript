// Program to Reverse a String

// Method-1
function reverseString(str) {
  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString("Rahul"));

// Method-2
// function reverseString(str) {
//   // return a new array of strings
//   const arrayStrings = str.split("");

//   // reverse the new created array elements
//   const reverseArray = arrayStrings.reverse();

//   // join all elements of the array into a string
//   const joinArray = reverseArray.join("");

//   // return the reversed string
//   return joinArray;
// }

// console.log(reverseString("Rahul"));