// JavaScript Program to Replace All Line Breaks with

const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.split("\n").join("<br>");

console.log(result);
