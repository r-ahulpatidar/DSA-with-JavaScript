// Program to Display the Multiplication Table

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(`${num} * ${i} = ${result}`);
  }
}

multiplicationTable(5);
