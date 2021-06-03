console.log('ENCAPSULATION DATA PRIVACY LECTURE');

class Account2 {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        this._movements = []; // "protected property" added a _ to the front of the property, doesnt actually protect it 
        this.locale = navigator.language;

        console.log(`Thanks for opening an account with us, ${this.owner}!`);
    }

    // Public Interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if(this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }
};

const acc2 = new Account2('Andy', 'USD', 2222);

console.log(acc2);

acc2.deposit(50);
acc2.deposit(200);
acc2.withdraw(30);

console.log(acc2.getMovements());