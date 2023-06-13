// Check the Number of Occurrences of a Character in the String

//method-1
function countString(str, letter) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < str.length; i++) {
    // check if the character is at that position
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}
console.log(countString("School", "o"));

// method-2
// function countString(str, letter) {
//   // creating regex
//   const re = new RegExp(letter, "g");

//   // matching the pattern
//   const count = str.match(re).length;

//   return count;
// }
// console.log(countString("School", "o"));

