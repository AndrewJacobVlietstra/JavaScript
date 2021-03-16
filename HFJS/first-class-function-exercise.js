//declare two functions
function fun(echo) {
    console.log(echo);
}

function boo(aFunction) {
    aFunction("boo");
}

// invoke fun function to log a string
fun("Hello");

// invoke boo, and pass it the fun function, which will log the "boo" string
boo(fun);

// These two will log the uncalled functions, it will simply state they are functions
fun(boo);
console.log(fun);

// this is assigning the reference to the fun function, to another variable, still fun function ultimatley
var moreFun = fun;
moreFun("hello again");



// Here we return the fun function when invoking the echoMaker function
function echoMaker() {
    return fun;
}
// bigFun variable now holds reference to fun function by invoking echoMaker and returning fun
var bigFun = echoMaker();
bigFun("Is there an echo?");


// When this function is invoked, it will perform a function expression, the function nested within
// will return an added value, once complete, the outer function returns the value of the inner function
function addN(n) {

    var adder = function(x) {
        return n + x;
    };

    return adder;
}

var add2 = addN(2);
console.log(add2(5));