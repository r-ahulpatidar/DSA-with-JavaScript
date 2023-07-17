// JavaScript Program to Display Date and Time

const date = new Date();

console.log(date);

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log("Date: " + n);

// display time
console.log("Time: " + time);
