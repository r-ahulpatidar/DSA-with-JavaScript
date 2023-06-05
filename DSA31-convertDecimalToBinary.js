// Program to Convert Decimal to Binary

// Method-1
function decimalToBinary(num) {
    let bin = 0;
    let rem;
    let step = 1;
    let i = 1;
    while(num != 0) {
        rem = num % 2;
        console.log(`Step ${step++}: ${num}/2, Remainder = ${rem}, Quotient = ${parseInt(num/2)}`);
        num = parseInt(num / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

decimalToBinary(9);


// Method-2
// function decimalToBinary(num) {
//     const result = num.toString(2);
//     console.log(result);
// }
// decimalToBinary(9);