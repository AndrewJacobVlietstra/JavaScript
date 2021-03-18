// Global variable
var justAVar = "Oh, don't you worry about it, I'm GLOBAL";


function whereAreYou1() {
    // this function defines a new lexical scope, in which we have a local variable
    // when called, this function will look in the nearest function scope,
    // if it can't find the variable locally it will then look in the global scope
    // all local variables are stored in an "Environment", or its "local scope"
    // When we return a function, we also return its environment attached to it
    var justAVar = "Just an every day LOCAL";

    return justAVar; // return the local variable value
}

// assign the reference of the invoked function and store it in variable result
var result = whereAreYou1();
// log the result to the console
console.log(result);


// ################################################################

// Now for a nested function example

var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

// here the outer function returns the invoked inner function, which returns the local variable
// so we can store the result of the called outer function in a variable and log it
function whereAreYou2() {
    var justAVar = "Just an every day LOCAL";

    function inner() {
        return justAVar;
    }
    return inner();
}
var innerFunction = whereAreYou2();
console.log(innerFunction);

// #################################################################

// Now look at this example

var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

// the outer function will return the reference to the inner function, non-invoked tho
// so whereAreYou3() == inner, notice how its not invoked
function whereAreYou3() {
    var justAVar = "Just an every day LOCAL";

    function inner() {
        return justAVar;
    }
    return inner; // no longer invoked
}
var innerFunction = whereAreYou3(); // innerFunction variable holds the reference to inner
var result = innerFunction(); // invoke inner, and store the return justAVar in result variable
console.log(result); // log the results...
// console.log(innerFunction());
