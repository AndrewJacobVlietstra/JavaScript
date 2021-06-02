console.log('Coding Challenge 1');

// Car constructor function
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

// Prototypal inheritance
Car.prototype.accelerate = function() {
    this.speed += 10;
    return `The ${this.make} accelerated to ${this.speed} km/h`;
};

Car.prototype.brake = function() {
    this.speed -= 5;
    return `The ${this.make} slowed down to ${this.speed} km/h`;
};

// Now the prototype object linked to all Car objects contains accelerate and brake methods
console.log(Car.prototype);

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw);
console.log(bmw.speed);
console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.brake());