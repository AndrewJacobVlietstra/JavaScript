console.log('PROTOTYPE LECTURE');

// Prototypes
console.log(Person.prototype);


// Preferred way to give all created objects access to methods
// Better performance-wise than copying the methods into every object
// Person.prototype is NOT the prototype property of the Person constructor, but all the objects made by Person
// This will be a prototype property/function for all objects created by the Person constructor function
Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

