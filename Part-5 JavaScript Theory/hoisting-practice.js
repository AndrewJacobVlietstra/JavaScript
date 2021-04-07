// Hoisting variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'; // var variables are hoisted to the value undefined
let job = 'Developer';
const year = 1991;


// Hoisting functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// Function Declaration
function addDecl(a, b) {
    return a + b;
}

// Function Expression
const addExpr = function(a, b) {
    return a + b;
}

// Arrow function, is also a type of function expression
var addArrow = () => a + b;


// Example

if(!numProducts) deleteShoppingCart(); // will call the function because undefined is a falsy value

var numProducts = 10; // variables defined with var also have their property added to the window object
// console.log(numProducts === window.numProducts);

function deleteShoppingCart() {
    console.log('All products deleted!');
}