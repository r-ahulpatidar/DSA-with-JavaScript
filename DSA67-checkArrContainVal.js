// JavaScript Program to Check if An Array Contains a Specified Value

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');
// const hasValue = array.indexOf('javascript') !== -1;

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}