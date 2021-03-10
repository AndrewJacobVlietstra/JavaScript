/*
let and const were introduced in 2015 with the release of ES6
*/

let age = 30;
age = 31; // mutated the variable further down the program


const birthYear = 1996; // immutable variable, cannot change, is constant
// birthYear = 2000;
// const job;


var job = "Programmer"; // let is block scoped, and var is function scoped, avoid var, don't use it
job = "Developer";

firstName = "Andrew";
console.log(firstName);