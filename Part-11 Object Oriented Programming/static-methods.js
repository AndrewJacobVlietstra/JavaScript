console.log('STATIC METHODS LECTURE');

// from method is attached to the Array constructor,
// from is in the Array namespace
console.log(Array.from(document.querySelectorAll('h1')));

// will not work with regular arrays like this
// console.log([1, 2, 3].from());

// Basically a static method is a method that can only be used with its respective constructor
// like parseFloat with the Number constructor or from with the Array constructor

class Test {
    static birthYear = 1990;

    constructor (firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }

    // Instance Method, 
    // will be available to all instanced objects, added to the prototype property of the constructor
    greet() {
        return `Why hello there ${this.firstName}`;
    }

    // Static method, only usable by the constructor / class, not shared to instanced objects
    // can only access static properties and static methods, not instanced ones
    static hey() {
        return `Hey there ✋ you are ${2021 - this.birthYear} years old!`; // "this" keyword will point back to Test class if used here
    }
};

const andrew = new Test('Andrew', 25);

console.log(andrew);
console.log(andrew.greet());
// console.log(andrew.hey()); // will throw error, andrew.hey is not a function
console.log(Test.hey());