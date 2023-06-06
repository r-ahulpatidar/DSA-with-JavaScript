// Program to Find ASCII Value of Character

function findAscii(string) {
  // pass the parameter as a single character
  const result = string.charCodeAt(0);           // const result = string.codePointAt(0);
  console.log(`The ASCII value is: ${result}`);
}

findAscii('a');
findAscii('A');
