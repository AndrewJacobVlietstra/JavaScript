// Objects are not a block, they're just a literal object, this is all still global scope
const jonas = {
    firstName: 'Jonas',
    year: 1991,

    calcAge: function() {
        console.log(this);

        const self = this;
        const isMillenial = function() {
            console.log(self);
        }
        isMillenial();
    },
    // Should not use arrow functions as methods, to avoid these kinds of errors, just stick with regular functions
    greet: () => console.log(`Hey ${this.firstName}`) // "this" of arrow function uses parent scope, which is global window object, same as window.firstName which is undefined, arrow function does not get its own "this"
};

// jonas.greet();
jonas.calcAge();