function wrapValue(x) {
    let local = x;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap2());


//---------------------------------

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

//my takeaway from closures is that an inner function has the outer function's scope available to it
// the inner function has access to the outer functions variables, parameters, bindings etc.
// this is even after the outer function is done executing