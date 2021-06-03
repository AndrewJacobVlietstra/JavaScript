console.log('ENCAPSULATION DATA PRIVACY LECTURE');

// Fields are just another word for properties

// 1) Public Fields
// 2) Private Fields
// 3) Public Methods
// 4) Private Methods
// (there are also static versions of all these)

class Account2 {
    // 1) Public fields (on all instances, not prototype)
    locale = navigator.language;
    
    // 2) Private Fields (on the instances, not prototype)
    #movements = [];
    #pin;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this._movements = []; // "protected property" added a "_" to the front of the property, doesnt actually protect it 
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account with us, ${this.owner}!`);
    }

    // 3) Public Methods
    // Public Interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
        }
        return this;
    }

    // Static methods are not available on instances, only on the class itself
    static helper() {
        console.log(`Provides some help.`);
    }

    // 4) Private Methods
    // #approveLoan(val) not working in browsers yet, but use "#" when it becomes part of JS
    _approveLoan(val) {
        return true;
    }

};

const acc2 = new Account2('Andy', 'USD', 2222);

acc2.deposit(50);
acc2.deposit(200);
acc2.withdraw(30);

console.log(acc2);

console.log(acc2.getMovements());

// console.log(acc2.#movements); // throws an error saying #movements is a private field

Account2.helper();
// acc2.helper(); // will throw error, function not available to instanced objects