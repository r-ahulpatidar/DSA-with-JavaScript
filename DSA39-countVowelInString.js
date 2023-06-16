// Program to Count the Number of Vowels in a String

// Method-1
// function countVowel(str) { 

//     // find the count of vowels
//     const count = str.match(/[aeiou]/gi).length;

//     // return number of vowels
//     return count;
// }
// console.log(countVowel("Rahul"));
// console.log(countVowel("AAdarsh Patidar"));

// Method-2
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}
console.log(countVowel("aei"));
console.log(countVowel("AAdarsh Patidar"));