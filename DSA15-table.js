// Program to Display the Multiplication Table up tp a rangle

function table(num, range) {
  for (let i = 1; i <= range; i++) {
    result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }
}

table(7, 5);
