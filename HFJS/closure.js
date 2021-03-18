
function justSayin(phrase) {
    var ending = "";

    // beingFunny and notSoMuch are free variables here
    if (beingFunny) {
        ending = " -- I'm just sayin!";
    } else if (notSoMuch) {
        ending = " -- Not so much.";
    }

    console.log(phrase + ending);
}

/*
    A closure results when we combine a function that has free variables with
    an environment that provides variable bindings for all those free variables.

    A free variable is one that isn't defined in the local scope. 
    The name free comes from the fact that within the function body, 
    free variables aren’t bound to any values.

    Now, when we have an environment that has a value for each of the free variables, 
    we say that we’ve closed the function. And, when we take the function and the
    environment together, we say we have a closure.

*/


// The only issue with this is that we have to use a global variable for count, which can
// be problematic if you’re developing code with a team
var count = 0;

function counter() {
    count = count + 1;
    return count;
}
console.log(counter());
console.log(counter());
console.log(counter());


// There is a way to implement a counter with a totally local and protected count variable
// Lets implement this with a closure

function makeCounter() {
    var count = 0;

    function counter() {
        count = count + 1; // count is a free variable in the scope of counter function
        return count;
    }

    // this is the closure, it holds count in its environment
    return counter;
}
// Store reference to counter function in doCount variable
doCount = makeCounter();

// invoke doCount, which is essentially counter function, and log results
console.log(doCount());
console.log(doCount());
console.log(doCount());


//--------------------------------------------------------------------

function makePassword(password) {

    function checkPassword(passwordGuess) {
        return (passwordGuess === password);
    }

    return checkPassword; // return the checkPassword function
}
// Give makePassword an argument for password parameter and store reference to checkPassword function in a variable
checkPass = makePassword("Night");
// invoke the checkPassword function and pass it an argument to compare
console.log(checkPass("Night"));


//--------------------------------------------------------------------

function multN(n) {

    return function multiply(num) {
        return n * num;
    }
}

operate = multN(3);

console.log(operate(5));


// -----------------------------------------------------------------

function makeCounter2() {
    var count = 0;

    countObject = {

        increment: function() {
            count = count + 1;
            return count;
        }
    };

    return countObject;
}
// store reference to object from the invoked function in some variable
countObject = makeCounter2();

console.log(countObject.increment());
console.log(countObject.increment());
console.log(countObject.increment());