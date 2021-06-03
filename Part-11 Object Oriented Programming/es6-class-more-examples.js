console.log('MORE ES6 CLASSES EXAMPLES LECTURE');

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account with us, ${this.owner}!`);
    }

    // Public Interface of our objects
    deposit(val) {
        this.movements.push(val);
    }

    // Small abstraction, but we hid the negative sign, that the user doesn't need to worry about typing
    withdraw(val) {
        this.deposit(-val);
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if(this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }
};

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);