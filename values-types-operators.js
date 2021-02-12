
console.log("Hello String \n" + "Hi");

console.log("Newline character is written like this \"\\n\"");

console.log(typeof true);

console.log("apple" != "orange");

console.log(true && false);
console.log(!false);

console.log(1 + 1 == 2 && 10 * 10 > 50);

console.log(true ? "a":"b");
console.log(false ? "a":"b");

console.log(typeof undefined);
console.log(typeof null);

console.log(8*null);
console.log("10" - 2);
console.log("10" + 2);
console.log("ten" / 2);

console.log(false == 0);
console.log(true == 1);

console.log(8*undefined);
console.log(null == undefined);
console.log("12" === 12);

console.log(undefined || null);
console.log(null || undefined);
console.log("user" || null);
console.log(null || "user");

console.log(123 && 0);
console.log(NaN && true);
console.log("" && true);
console.log("abc" && "123");
console.log(123 && "abc");

let x = 5 * 5;
console.log(x);

x = 6 * 6;
console.log(x);

x = 140;
x = x - 20;
console.log(x);

var name = "Andrew";
const greeting = "Hello there ";
console.log(greeting + name);

// Use this in a browser to open a prompt box with input
// prompt("enter");

console.log(Math.max(5,2,7,4));
console.log(Math.pow(5,2) + 5);

// let theNumber = Number(prompt("Pick Your Number"));
// console.log("Your number is square root of " + theNumber * theNumber);

let y = 5;
if (Number.isInteger(y)) {
    console.log(y*y);
} else {console.log("That's not a number!");}