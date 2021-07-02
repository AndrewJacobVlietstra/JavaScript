'use strict';

let obj = {b: "c"};
console.log(typeof obj);

function foo() {
    return 42;
}
foo.bar = 'hello world'; // because functions are objects we can apply properties to them
console.log(foo);
console.log([] || {});

function makeAdder(x) {
    function add(y) {
        return x + y;
    }

    return add;
};

let plusOne = makeAdder(1);
let plusTen = makeAdder(10);

console.log(plusOne(3));


function foobar() {
    var a = arguments[0] === (void 0) ? 2 : arguments[0];
    console.log( a );
}
foobar();