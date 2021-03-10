// In JS there are objects and primitive data types, types are only primitive when they're not an object!

let me = { // me object
    name: "Andrew"
};

let firstName = "Andrew"; // declaring a variable, with a string value
let age = 25; // integer value

/* The 7 Primitive Data Types

1. Number -> floating point numbers, used for decimals and integers

2. String -> Sequence of characters, used for text

3. Boolean -> Logical type that can only be true or false, used for making decisions

4. Undefined -> Value assigned to a variable that is not yet defined ("Empty value"), like "let x;"

5. Null -> null expresses a lack of identification, indicating that a variable points to no object.

6. Symbol -> Value that is unique and cannot be changed

7. Bigint -> Larger integers than the Number type can hold

JS has dynamic typing. Meaning we do NOT have to manually define the data type of the value stored in a variable
Instead data types are determined automatically
*/

console.log(typeof null); // not an object, should return undefined, this is a known bug in JS

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

javaScriptIsFun = "Yes";
console.log(typeof javaScriptIsFun);

let guests; // undefined is the value and the data type in this case
console.log(guests);
console.log(typeof guests);