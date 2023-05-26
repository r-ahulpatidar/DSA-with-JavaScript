// Program to Find LCM

function findLCM(number1, number2) {
  let hcf;

  for (let i = 0; i <= number1 && i <= number2; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
      hcf = i;
    }
  }
  let lcm = (number1 * number2) / hcf; // find the lcm using HCF
  return console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);
}

findLCM(6, 8);
findLCM(7, 3);
