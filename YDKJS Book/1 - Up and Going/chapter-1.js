// console.log(5); // dot notation of calling object properties
// console["log"](5); // square bracket notation

// declare some constants and variables
const taxRate = 1.13;
const phonePrice = 99.99;
const phoneAccessoryPrice = 7.99;
const threshold = 300;
let bankBalance = 1000;

function calcTax(price) {
    return price * taxRate;
};

function formatAmount(num) {
    return `$${num.toFixed(2)}`;
};

function totalPriceOfPhones() {
    let amount = 0;

    // I want to break out of loop after passing the threshold for spending money
    while(amount < bankBalance) {
        if(amount > threshold) break;
        amount = amount + phonePrice + phoneAccessoryPrice; // price of phone and case
    };
    console.log(`Final amount before tax is ${formatAmount(amount)}`);
    return amount;
};

function purchasePhones(finalPrice) {
    bankBalance = bankBalance - finalPrice;
    console.log(`Bank Balance is now ${formatAmount(bankBalance)}`);
}

let priceResult = totalPriceOfPhones(); // calc price of phones I can buy while above my threshold
let totalPrice = calcTax(priceResult); // calc total price with tax applied
console.log(`Total with tax applied is ${formatAmount(totalPrice)}`);
purchasePhones(totalPrice); // purchase phones and use money in bank account