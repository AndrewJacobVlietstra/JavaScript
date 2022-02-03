// Add a new method to the Date prototype object that returns last year from a given year
Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}

console.log(new Date('1900-10-10').lastYear());


// Rewrite map function to return all values of array with map concatenated
Array.prototype.map = function() {
    let newArr = [];
    for(let i = 0; i < this.length; i++) {
        newArr.push(this[i] + '🗺');
    }
    return newArr;
}

console.log([1, 2, 3].map());



// Create your own bind method

// First create myName Object
let myName = {
    firstName: "Andrew",
    lastName: "V"
}

// Create a function that will print the name of a provided name object
let printName = function(country, state) {
    console.log(`${this.firstName} ${this.lastName}, ${country}, ${state}`);
}

// Test using the printName function with bind, store the new function with "this" pointing to myName object
let printMyName = printName.bind(myName, "Canada", "Ontario");
printMyName(); // result is Andrew V

// Now create my own bind method
Function.prototype.myBind = function(...args) {
    // "this" refers to the object that calls the myBind function, in this case the printName function, remember functions are just "callable" objects in JS
    let fn = this; // printName
    let params = args.slice(1); // slice(1) will return all the other parameters in an array, minus the first one, which is what "this" keyword should refer to

    // In the end we need to return a function that we can invoke later
    // first parameter/argument represents what we want the "this" keyword to be referring to for the printName function during runtime
    // args2 represents any parameters passed into the printMyName2 function
    return function(...args2) {
        // concatenate both arrays with parameters
        fn.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.myBind(myName, "Canada");
printMyName2("Ontario");