// Constructor functions start with capital letter by convention
const Person = function(firstName, birthYear) {
    // Instance Properties
    this.firstName = firstName; // "this" refers to the new object, so this will create properties in the new object
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function() {
    //     console.log(2021 - this.birthYear);
    // };
};

// 1. New {} is created
// 2. Function is called, this keyword is assigned to the new {}
// 3. Newly created {} is linked to a prototype
// 4. Function automatically returns the {}
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 2000);
console.log(matilda, jack);

const jay = 'jay';

// Check to see if an object is an instance of a constructor function
console.log(jonas instanceof Person);
console.log(jay instanceof Person);