/*
    You can place function declarations anywhere in your code—at the top, at the bottom, 
    in the middle—and invoke them wherever you like. Function declarations create functions 
    that are defined everywhere in your code (this is known as "hoisting").


    Function expressions are obviously different because they aren’t defined until they are
    evaluated in the top to bottom second pass of the code. So, even if you assign the function 
    expression to a global variable, like we did with fly, you can’t use that variable to 
    invoke a function until after it’s been defined.

*/

var migrating = true;

if (migrating) {
    quack(4);
    fly(4); // fly is called here, but the function expression has not been executed yet
}

// this function expression is evaluated after its been called, thus a type-error is thrown
var fly = function(num) {
    for (var i = 0; i < num; i++) {
        console.log("Flying!");
    }
}

// function declaration is evaluated on first pass of code, then assigned to variable quack
// with a reference to the function.
function quack(num) {
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}