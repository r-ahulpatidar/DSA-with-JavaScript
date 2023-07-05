// JavaScript Program to Generate Random String

// Method-1
// declare all characters
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

console.log(generateString(5));
console.log(generateString(10));


// Method-2
const result = Math.random().toString(36).substring(2,7);
console.log(result);
