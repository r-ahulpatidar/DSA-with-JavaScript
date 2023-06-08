// Program to Sort Words in Alphabetical Order

function sortWord(string) {
    const result = string.split(" ").sort().join(" ");
    return console.log(result);
}

sortWord("I am learning JavaScript");  // here I and J are uppercase so uppercase letters are placed before lowercase.
sortWord("i am learning javascript");