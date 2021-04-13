/*
JS treats functions as values, they are just another "type" of object

Store functions in variables or properties

Pass functions as arguments to other functions

Return functions From functions

Call methods on functions
*/

// HIGHER-ORDER Functions, a function that receives another functions as an argument, that returns a new function or both
// This is only possible because of first-class functions

function oneWord(str) {
    return str.replace(/ /g, '').toLowerCase();
}

function upperFirstWord(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
function transformer(str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);