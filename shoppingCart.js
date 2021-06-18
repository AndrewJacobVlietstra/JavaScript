// Exporting Module
console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart!`);
};

const totalPrice = 321;
const totalQuantity = 20;

export { totalPrice, totalQuantity as qt };

