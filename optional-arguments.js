

function square(x) {
    return x * x;
}
// JavaScript doesn't complain about multiple parameters, even when a function is defined with only
// one parameter. Extra arguments are basically ignored and only the first ones are used.
console.log(square(3, true, false, "string"));


// However if you pass too few arguments, the missing ones are assigned a value of undefined
function minus(a, b) {
    if(b === undefined) {
        return -a;
    }
    else {
        return a-b;
    }
}
console.log(minus(5));
console.log(minus(5, 2));


//-----------------------------------------------------------------------------------------------------
// if you set a parameter equal to a value, that parameter will be that value, when not given explicitly
function power(base, exponent = 2){
    let result = 1;
    for (let count = 1; count <= exponent; count++){
        result = result * base;
    }
    return result;
}
console.log(power(3));
console.log(power(3, 3));