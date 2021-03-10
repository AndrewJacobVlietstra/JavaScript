let bill = 430;
let tip;

// check if the bill is greater than 50 AND less than 300
// true/false ? true : false;
(bill >= 50 && bill <= 300) ? tip = 0.15 * bill : tip = 0.2 * bill;

console.log(`The bill is ${bill}, the tip is ${tip}, and the total bill is ${bill + tip}`);