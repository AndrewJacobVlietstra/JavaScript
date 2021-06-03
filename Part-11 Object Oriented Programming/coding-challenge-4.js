console.log('CODING CHALLENGE 4');

// Make parent class
class VehicleCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 20;
        return this; // returns instanced object to allow chaining of methods
    }

    brake() {
        this.speed -= 20;
        return this;
    }
}

// Child class will extend and inherit properties and methods from parent class
class EVCl extends VehicleCl {
    #charge; // private field

    constructor(make, speed, charge) {
        super(make, speed); // pass in parent class's parameters

        // New property unique to child class
        this.#charge = charge;
    }

    // Example of polymorphism, re-writing of a method that already exists
    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        return this;
    }

    // New method unique to child class
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().chargeBattery(40).accelerate();
console.log(rivian);