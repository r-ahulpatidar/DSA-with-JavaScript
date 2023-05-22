// Program to Check Armstrong Number

function checkArmstrong(number) {
  const numberOfDigits = number.toString().length;
  let sum = 0;

  // create a temporary variable
  let temp = number;

  while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
  }

  if (sum == number) {
    console.log(`${number} is an Armstrong number`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }
}

checkArmstrong(92727);
checkArmstrong(153);
