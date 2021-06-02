console.log('SETTERS & GETTERS LECTURE');

const account = {
    owner: 'Jonas',
    movements: [200, 550, -400, 300, 150],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    // any setter needs exactly one argument
    set latest(movement) {
        this.movements.push(movement);
    }
}

// Get
console.log(account.latest);

// Set
account.latest = 50;
console.log(account.movements);