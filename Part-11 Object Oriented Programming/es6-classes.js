console.log('ES6 CLASSES LECTURE');

// Class expression
// const PersonCl = class {}

// Class declaration
// Classes in JS do not work the same as in Java or C++, they are basically syntax sugar,
// with constructors and prototypal inheritance still going on behind the scenes
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods written outside the constructor but still in the class will be added
    // to the prototype property that is linked to all objects, but the objects themselves
    // don't carry the methods with them, this saves on performance
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    greet() {
        console.log(`Hey there ${this.firstName}`);
    }
}

const jessica = new PersonCl('Jessica', 1997);
console.log(jessica);

console.log(jessica.__proto__ === PersonCl.prototype);

// Another way of adding more methods to the linked prototype object
PersonCl.prototype.depart = function() {
    console.log(`See you later ${this.firstName}`);
};

jessica.calcAge();
jessica.greet();
jessica.depart();

// 1. Classes are "syntactic sugar" over constructor functions
// 2. Classes are NOT hoisted, even if declared
// 3. Classes are first-class citizens
// 4. Class body is always executed in strict mode