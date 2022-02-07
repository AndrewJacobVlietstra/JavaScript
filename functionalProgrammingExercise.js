// Shopping
const user1 = {
    name: 'Tim',
    active: true,
    cart: [],
    purchases: []
};

// Implement These Features
// 1. Add Items to Cart
// 2. Add 3% tax to items added to cart
// 3. Buy Items: Cart --> Purchases
// 4. Empty Cart

// Bonus Functionality **
// 1. Accept Refunds
// 2. Track User History

// 1. Add Items to Cart
function addItemToCart(item) {
    return this.cart.push(item);
}
// User 1 Adds an item to their cart
addItemToCart.call(user1, {item: '1440p Monitor', price: 149.99, itemID: 12});
addItemToCart.call(user1, {item: 'Razer Mouse', price: 75.99, itemID: 4});
addItemToCart.call(user1, {item: 'Headphones', price: 99.99, itemID: 7});
console.log(user1.cart);

// 2. Add 3% tax to items added to cart
function taxItemsInCart() {
    return this.cart.forEach(item => {
        item.price = (item.price * 1.03).toFixed(2);
    });
}

taxItemsInCart.call(user1);
console.log(user1.cart);


// 3. + 4. Buy Items, Transfer Items from cart to purchases, empty cart
function buyItems(user) {
    if (this.cart == []) return; // if user tries to purchase with empty cart, do nothing
    this.purchases = [...this.cart]; //copy contents of cart array into purchases array
    this.cart = []; // clear out cart array
    return user;
}

buyItems.call(user1);
console.log(user1);