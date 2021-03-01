
/*
Because a function has to jump back to the place that called it when it returns a value,
the computer must remember the context from which the call happened.
The place where the computer stores this context is called the call stack.
Everytime a function is called, this context is stored on top of this stack.
*/

function greet(who) {
    console.log("Hello " + who);
}
greet("Peter"); //control jumps up to function and then executes body, then comes back to where function was called
console.log(5+5); // then executes this line of code



// When the stack grows too big the computer will fail with an error message of max stack size
// or out of stack space. The following code asks the computer a hard question,
// which results in an infinite back and forth between functions, or rather would be infinite
// if the computer had infinite memory...

function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(egg());