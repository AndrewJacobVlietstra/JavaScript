/*

    Primitive Types like numbers, strings, booleans, null, undefined, symbol

    High level objects like document, element, Math, console etc.

    Think of undefined as a value assigned to things that don't have a value, its type is undefined as well

    null is intended to represent an object that isn’t there

    It is most common to use null in places where an object should be
    but one can’t be created or found, and it is most common to find
    undefined when you have a variable that hasn’t been initialized, or
    an object with a missing property, or an array with a missing value.

    ===, two values are strictly equal only if they have the same type and value!

*/

console.log(typeof undefined);

var x;
// check to see if variables of object properties have values by testing if equal to undefined
if (x == undefined) {
    console.log(`x is undefined!`);
}


var customer = {
    name: "Jenny"
};

if (customer.phoneNumber == undefined) {
    console.log("I don't know Jenny's phone number!");
}

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};
// We intend to assign an object to this variable at some point, but we haven’t yet.
var test10 = null; // null -> I would have been an object if there was one, but we don’t have one.

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);

console.log(NaN == NaN); // NaN is a weird value, the only value that isn't equal to itself O_o

console.log(99 == "99"); // string is converted to number temporarily for the comparison

console.log(1 == true); // converts true to its number value, 1, false converts to 0
console.log("1" == true); // multiple steps here, true converts to 1, and "1" converts to 1, result is true

console.log(undefined == null); // these both essentially represent no value, variable with no value and object with no value
console.log(-true);
console.log(true + " love");

console.log(Infinity - 1);
console.log("42" + 42);
console.log(2 + "1 1");
console.log(99 + 101);
console.log("1" - "1");
console.log(10 / 2);
console.log(3 + " bananas " + 2 + " apples");
console.log(typeof(3 + " bananas " + 2 + " apples"));

// If determining if two objects are equal just use == or ===, it doesn't matter

object1 = {}; // remember we're comparing the reference values in the variables, since the variable does not hold the object itself
object2 = {};
object3 = object1 // doesnt matter whats in the object, as long as the references pointing to the object are equal, you'll get true

if (object1 === object2) {
    console.log("These objects references are equal");
} else {
    console.log("The object references are not equal")
}

if (object1 === object3) {
    console.log("These objects references are equal");
}

// Strings can be both primitive type or an object type, string.substring, the string is temporarily converted to an object to perform the substring method
str = "Hello";
console.log(str.substring(2,5));