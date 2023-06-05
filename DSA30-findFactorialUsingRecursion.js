// Program to Find Factorial of Number Using Recursion

function findFactorial(num) {
    if(num == 1) {
        return num;
    } else {
        return num * findFactorial(num - 1);
    }
}
let fact = findFactorial(5);
console.log(fact);