a = {b: "c"};
console.log(typeof a);

function foo() {
    return 42;
}
foo.bar = 'hello world'; // because functions are objects we can apply properties to them
console.log(foo);
console.log([] || {});