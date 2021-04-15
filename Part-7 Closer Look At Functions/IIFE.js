// Immediatley Invoked Function Expressions
// A function that is called once and disappears right after its done executing, useful in Async/Await


// This function we can actually call again as much as we want
const runOnce = function() {
    console.log(`This will never run again!`);
}
runOnce();


// IIFE
// Normally JS does not like a function keyword declaration with no function name, trick JS into thinking this is an expression by wrapping () around it
(function() {
    console.log(`This will never run again!`);
    const isPrivate = 23;
})(); // Notice how its invoked here after the wrapped ()

// IIFE as an arrow function
(() => console.log('This will ALSO never run again'))
();

{
    let isPrivate1 = 1; // let and const are not accessible outside their block
    const isPrivate2 = 2;
    var isPrivate3 = 3; // var is accessible outside block
}

console.log(isPrivate3);
// console.log(isPrivate2);