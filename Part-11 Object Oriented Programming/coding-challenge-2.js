console.log('Coding Challenge 2');

class Vehicle {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        return console.log(`The ${this.make} accelerated to ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        return console.log(`The ${this.make} slowed down to ${this.speed} km/h`);
    }

    get speedUS() {
        return `The car's converted speed is ${this.speed / 1.6} mi/h`;
    }

    // setters need exactly one parameter
    set speedUS(speed) {
        return this.speed = speed * 1.6;
    }
};

const ford = new Vehicle('Ford', 120); // 120 km/h
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();

ford.speedUS = 50; // mi/h
console.log(ford);