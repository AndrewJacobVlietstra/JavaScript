/*
When the browser parses through your page —before it evaluates any code— it’s
looking for function declarations. When the browser finds one, it creates
a function and assigns the resulting reference to a variable with the same
name as the function.

However, with function expressions the function is created at run time, while the
code is executing, this is a subtle difference between function declarations and
function expressions

*/

var migrating = true;

// So far we've been declaring functions like this, function with name
function quack(num) { // function declaration, sort of like a hidden assignment to a variable quack that holds a reference value to the function quack
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}
quack(3); // call / invoke the function


// But now there is another way to use the function
// Here we assign a function with no name to a variable
// This is known as a "Function Expression"
var fly = function(num) { // function expression, fly variable is assigned the function reference value of where the function will be stored in memory
    for (var i = 0; i < num; i++) {
        console.log("Flying!");
    }
}
fly(3); // we can still invoke the function just like before

// We can pass function references to other functions or return a reference from a function


if (migrating) {
    quack(4);
    fly(4);
}

// We can assign a function to a variable like this too, we can sort of think of them as values
// We're just assigning the reference value from one variable to another
var superQuack = quack;
superQuack(2);

/*
Start thinking about functions as values, just like numbers, strings,
booleans or objects. The thing that really makes a function value
different from these other values is that we can invoke it.
*/