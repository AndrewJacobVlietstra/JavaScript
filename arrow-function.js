// arrow comes after parameters and is then followed by the body of the function
const power = (base, exponent) => { // => means these parameters produce this result (body of function)

    let result = 1;
    for (let counter = 1; counter <= exponent; counter += 1) {
        result = result * base;

    }

    return result;
};


//-------------------------------------------------------------------------------------------
// These two functions are the same, if the function has only one parameter you can omit (),
// if the body is a single expression, you can omit {} and the return statement, 
// and the function will return the result automatically
const square1 = (x) => { return x * x };
const square2 = x => x * x ;

console.log(square2(3));



// When an arrow function has no parameters at all, its parameter list is an empty ()
const horn = () => {
    console.log("Beep");
};
console.log(horn());