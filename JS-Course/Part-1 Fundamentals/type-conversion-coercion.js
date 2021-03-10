/*
Type conversion -> manually convert from one type to another

Type coercion -> JS will convert types behind the scenes

*/

// type conversion
const inputYear = '1991';

console.log(typeof(inputYear + 18)); // this concatenates, number 18 is coerced to be a string

console.log(Number(inputYear) + 18); // convert string to a number manually, using Number function, then add

console.log(Number("Andrew")); // convert string to number
console.log(typeof NaN); // NaN still a number, just invalid number

console.log(String(23), 23); // can convert number to string


// type coercion

console.log('I am ' + 23 + ' years old'); // number is converted to string from "+" operator
console.log('I am ' + '23' + ' years old'); // "+" triggers number -> string conversion

console.log("23" - "10" - 3); // "-" triggers opposite conversion, string -> number

console.log("10" * "2"); // these also convert string -> number with * and / operators
console.log("10" / "2");

console.log("25" > "10"); // JS convert string -> number to check this boolean expression


let n = "1" + 1; // converts to string from concatenate operator, "11"
n = n - 1; // converts to number from subtraction operator, n = 11 - 1
console.log(n); // result should be 10

// converts to string when adding string, and converts back to number when subtracting
console.log(5 + 6 + '4' + 9 - 4 - 2);