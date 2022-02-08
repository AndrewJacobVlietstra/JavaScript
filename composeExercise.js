// Compose
// Set up our composition of functions
const compose = (f, g) => (data) => f(g(data));

// Set up the functions we need to compute our data
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

// Call the compose and pass in the functions to compose together
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-10));