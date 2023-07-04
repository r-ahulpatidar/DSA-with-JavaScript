// JavaScript Program to Replace All Occurrences of a String

// Method-1
const string = "Mr Red has a red house and a red car";

// regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, "blue");

// display the result
console.log(newText);


// Method-2
// const string = 'Mr red has a red house and a red car';

// const result = string.split('red').join('blue');

// console.log(result);


