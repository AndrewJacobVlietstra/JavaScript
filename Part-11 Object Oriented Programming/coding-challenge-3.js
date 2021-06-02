console.log('Coding Challenge 3');

// Make a general parent constructor
const VehicleConstructor = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

// Add on a simple method for the parent constructor function
VehicleConstructor.prototype.accelerate = function() {
    this.speed += 10;
    return console.log(`The ${this.make} accelerated to ${this.speed} km/h`);
};

// Create a more specified constructor which will become a child of the general parent
const ElectricCar = function(make, speed, batteryCharge) {
    // call the parent constructor to assign these properties, for this Electric car being made
    VehicleConstructor.call(this, make, speed)
    this.batteryCharge = batteryCharge;
}

// Link Electric car's prototype to the VehicleConstructor's
// Effectively making ElectricCar Constructor a child of the Vehicle Constructor
ElectricCar.prototype = Object.create(VehicleConstructor.prototype);

// Ensure that the ElectricCar's constructor points back to itself
// without the below line, it will point back to the parent constructor
console.dir(ElectricCar.prototype.constructor);
ElectricCar.prototype.constructor = ElectricCar;
console.dir(ElectricCar.prototype.constructor);

// Add on any methods needed for ElectricCar after the linking, so methods are not lost
ElectricCar.prototype.chargeBattery = function(chargeTo) {
    this.batteryCharge = chargeTo;
    return console.log(`The ${this.make} has been charged to ${this.batteryCharge}% charge.`);
};

// Example of polymorphism, this is the first accelerate encountered in the prototype chain
// so it is the first to be used, note that the parent constructor also has accelerate but
// it will only be used if the electric car accelerate method cannot be found
ElectricCar.prototype.accelerate = function() {
    this.speed += 20;
    this.batteryCharge -= 1;
    return console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.batteryCharge}%`);
};

ElectricCar.prototype.brake = function() {
    this.speed -= 10;
    this.batteryCharge += 1;
    return console.log(`${this.make} slowing down to ${this.speed} km/h, with a charge of ${this.batteryCharge}%`);
};


const tesla = new ElectricCar('Tesla', 120, 23);
console.log(tesla);

tesla.chargeBattery(46);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
