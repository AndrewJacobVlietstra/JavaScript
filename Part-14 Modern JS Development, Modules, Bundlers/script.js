// Importing Module (Imports are hoisted)
console.log('Importing Module');
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, qt);


import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart);