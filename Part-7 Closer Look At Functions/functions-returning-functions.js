// This is an example of a function returning a function, but it also uses something called closure
function greet(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steve');

greet('Hello')('Andrew');


// Greet function but using arrow functions
const greetArrow = greeting => {
    return name => {
        console.log(`${greeting} ${name}`);
    }
}

greetArrow('Hi there')('Bob');