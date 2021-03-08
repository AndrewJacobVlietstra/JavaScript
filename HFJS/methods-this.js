// Functions inside an object are typically referred to as "methods".
var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "chase a stick",
    dogFriends: ["Spike", "Milo", "Wizard", "Jake"],
    bark: function() { // bark method
        return "Woof woof!";
    }
};

console.log(dog.bark()); // calling the bark method in the dog object
console.log(dog.dogFriends);



var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    colour: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false, // property, not a variable, if using methods that rely on "started", you will get reference error, use "this.started" instead

    // by creating a method to change an object's property state, this is an example of encapsulation
    // which is letting an object handle changing its states and/or values of its properties
    // this just improves maintainability and extensibility of our code
    start: function() { // start method
        this.started = true;
    },

    // The real key to understanding "this" is that whenever a method is called,
    // in the body of that method you can count on "this" to be assigned to
    // the object whose method was called.
    stop: function() { // stop method
        this.started = false; // this.started is same as saying chevy.started in this case
    },

    drive: function() { // drive method
        if(this.started) { // use "this" keyword to tell JS we mean the started property of "this" object were currently in, and not some variable
            return "Vrrrrmmmm zooooom!";
        } else {
            return "Engine is currently off!";
        }
    }
};

chevy.start(); // invoke the start method
console.log(chevy.drive()); // call the drive method


// eightBall object with some methods using "this" keyword
var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function() {

        this.index = this.index + 1;
        if(this.index >= this.advice.length) {
            this.index = 0;
        }
    },

    look: function() {
        return this.advice[this.index];
    }
};

eightBall.shake();
console.log(eightBall.look());