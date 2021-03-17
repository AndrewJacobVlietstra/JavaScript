// Global variable
var justAVar = "Oh, don't you worry about it, I'm GLOBAL";


function whereAreYou() {
    // local variable inside the function
    var justAVar = "Just an every day LOCAL";

    return justAVar; // return the local variable value
}

// take the result of invoking the function and store it in variable result
var result = whereAreYou();
// log the result to the console
console.log(result);