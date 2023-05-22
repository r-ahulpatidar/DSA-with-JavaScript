// Program to Make a Simple Calculator (Take inpute from users)

function simpleCalC(number1, number2, operator) {
  let result;

  if (operator == "+") {
    result = number1 + number2;
  } else if (operator == "-") {
    result = number1 - number2;
  } else if (operator == "*") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  // display the result
  console.log(`${number1} ${operator} ${number2} = ${result}`);
}

simpleCalC(2, 5, "+");
simpleCalC(2, 5, "-");
simpleCalC(2, 5, "*");
simpleCalC(2, 5, "/");
