const square = function(x) {
    return x * x;
};

// console.log(square(x));

//------------------------------------------
// Any function that is not returning a value will return undefined by default
// notice that we simply put console.log, and not return "Make some noise"
const makeNoise = function() {
    console.log("Make some noise");
};
console.log(makeNoise());


//-----------------------------------------

const power = function(base, exponent) {
    let result = 1;
    for (let counter = 1; counter <= exponent; counter += 1) {
        result = result * base;

    }

    return result;
};

console.log(power(3,3));


//-----------------------------------------



const x = 10; // const is a binding where the value cannot be reassigned, unlike let, let can be reassigned
if (true){
    let y = 10; // local scope, reference error will throw if you try to print y outside its block
    var z = 10; // var is a global scope type binding/variable, can be called from outside a block
    console.log(x + y + z);
}

console.log(z);

//-----------------------------------------


const halve = function(n) { // this type of function setting makes it relative here in the flow
    return n / 2;
};


let n = 10;
console.log(halve(20)); //this function will see the value of 20 for n, and not 10,
                        // think of it as being reassigned


console.log(future(2))
function future(j) { // this type of function is like its at the top of its scope, of the normal flow
    return "Hello there"+j;
} // also does not need semicolon to end the function declaration