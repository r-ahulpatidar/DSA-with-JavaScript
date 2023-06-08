// Program to Check Whether a String is Palindrome or Not

// Method-1
function checkStringPalindrome(string) {
    const stringLength = string.length;
    for(let i = 0; i < stringLength / 2; i++) {
        if(string[i] !== string[stringLength - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

let result1 = checkStringPalindrome("hello");
let result2 = checkStringPalindrome("radar");

console.log(result1);
console.log(result2);

// Method-3
function checkPalindrome(string) {
    const reverseString = string.split('').reverse().join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
checkPalindrome("hello");
checkPalindrome("radar");