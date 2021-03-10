let futureYear = 2022;

const birthYearJonas = 1991;
const birthYearAndrew = 1996;

// Math operators
let futureAgeJonas = futureYear - birthYearJonas;
let futureAgeAndrew = futureYear - birthYearAndrew;

console.log(futureAgeJonas, futureAgeAndrew);

console.log(birthYearAndrew * 2, birthYearAndrew / 10, 2 ** 3);

const firstName = "Andrew";
const lastName = "Vlietstra";

console.log(firstName + " " + lastName); // concatenate operator

// Assignment operators
let x = 20;
x = x + 10; // x += 10 is shorthand way of writing this
x = x * 4; // x *= 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);


// Comparison Operators
console.log(futureAgeJonas > futureAgeAndrew); // >, <, >=, <=, results of these are boolean
console.log(futureYear - birthYearJonas > futureYear - birthYearAndrew);