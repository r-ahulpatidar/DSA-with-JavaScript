// Program to Convert the First Letter of a String into UpperCase

function capitalizeFirstLetter(str) {

  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);  // slice method add the rest of the string in the first letter

  return capitalized;
}

console.log(capitalizeFirstLetter("rahul"));

// Method-2
// function capitalizeFirstLetter(str) {

//     // converting first letter to uppercase
//     const capitalized = str.replace(/^./, str[0].toUpperCase());

//     return capitalized;
// }
// console.log(capitalizeFirstLetter("rahul"));