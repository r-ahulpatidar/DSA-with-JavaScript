// JavaScript Program to Create Multiline Strings

// Method-1
// using the + operator
const message = 'This is a long message\n' + 
    'that spans across multiple lines\n' + 
    'in the code.'

console.log(message);


// Method-2
// using the \ operator
const message1 = 'This is a long message\n \
that spans across multiple lines\n \
in the code.'

console.log(message1);


// Method-3
// using the template literal
const message3 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message3);