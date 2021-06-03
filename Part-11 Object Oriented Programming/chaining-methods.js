console.log('CHAINING METHODS LECTURE');

// Chaining
// This wont work unless the methods in the class return "this" account we are trying to chain methods on
// so implement the needed logic into the methods then simply return "this"
// take a look at the methods in encapsulation-data-privacy file to see

acc2.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(1000);
console.log(acc2.getMovements());