// Program to Find LCM

// another method is written in dsa25 plz reat it
function findLcm(num1, num2) {
  let min = num1 > num2 ? num1 : num2;

  // while loop
  while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
      console.log(`The LCM of ${num1} and ${num2} is ${min}`);
      break;
    }
    min++;
  }
}
findLcm(6, 8);
