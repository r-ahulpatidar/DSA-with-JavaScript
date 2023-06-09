// Program to Replace Characters of a String

function replaceCharacter(string) {
    
    const regex1 = /red/g;        // g stands for global match 
    const regex2 = /red/i;        // i match for incase-sensitive
    const regex3 = /red/ig;

    const result = string.replace('red', 'blue');
    const result1 = string.replace(regex1, 'blue');
    const result2 = string.replace(regex2, 'blue');
    const result3 = string.replace(regex3, 'blue');

    console.log(result);
    console.log(result1);
    console.log(result2);
    console.log(result3);
}

replaceCharacter('Mr Red has a red house and a red car');