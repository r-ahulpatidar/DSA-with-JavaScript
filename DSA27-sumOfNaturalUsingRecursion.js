// Program to Find Sum of Natural Numbers Using Recursion
// natural numbers (1 - infinity)

function SumOfNaturalNumber(num) {
    if(num > 0) {
        return num + SumOfNaturalNumber(num - 1);
    } else {
        return num;
    }
}

console.log(SumOfNaturalNumber(5));

// sum(5) returns 5 + sum(4)
// sum(4) returns 5 + 4 + sum(3)
// sum(3) returns 5 + 4 + 3 + sum(2)
// sum(2) returns 5 + 4 + 3 + 2 + sum(1)
// sum(1) returns 5 + 4 + 3 + 2 + 1 + sum(0)
// sum(0) returns 5 + 4 + 3 + 2 + 1 + 0