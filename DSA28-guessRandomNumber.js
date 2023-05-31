// JavaScript Program to Guess a Random Number

function randomNumber() {
    const random = Math.floor(Math.random() * 10) + 1; // 1 - 10

    return random;
}

console.log(randomNumber());;