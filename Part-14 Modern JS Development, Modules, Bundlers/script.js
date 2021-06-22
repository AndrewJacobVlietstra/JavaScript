// Importing Module (Imports are hoisted)
console.log('Importing Module');
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, qt);


// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart);



// include a "type": "module", line in the package.json file to prevent error
// never copy the node modules folder when copying your project, just use 'npm install' command in terminal
// to install necessary dependencies from your package.json file
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'bread', quantity: 5},
    ],
    user: {loggedIn: true},
};

const stateClone = Object.assign({}, state); // creates new reference pointing to same object
const stateDeepClone = cloneDeep(state); // creates whole new object

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);