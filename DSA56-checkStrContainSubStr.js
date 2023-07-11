// JavaScript Program to Check Whether a String Contains a Substring

// check if string contains a substring
const str = "Rajasthan is a beautiful City";
const checkString = "beautiful";

// Method-1
if (str.includes(checkString)) {
  console.log(`The string contains ${checkString}`);
} else {
  console.log(`The string does not contain ${checkString}`);
}

// Method-2
if (str.indexOf(checkString) !== -1) {
  console.log(`The string contains ${checkString}`);
} else {
  console.log(`The string does not contain ${checkString}`);
}
