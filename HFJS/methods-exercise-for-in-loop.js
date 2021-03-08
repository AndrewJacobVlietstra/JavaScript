var chevy = { // Describing a Chevy car as an object in JS
    make: "Chevy",
    model: "Bel Air", // you have a "property name: and a property value" separated by commas
    year: 1957,
    colour: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,

    start: function() { // start method
        this.started = true; // this.started == chevy.started when inside the chevy object
    },

    stop: function() { // stop method
        this.started = false;
    },

    drive: function() { // drive method
        if(this.started) {
            return this.make + " " + this.model + " goes zoom!";
        } else {
            return "Engine is currently off!";
        }
    }
};

var cadi = { 
    make: "cadillac",
    model: "GM Cadillac",
    year: 1955,
    colour: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,

    start: function() { // start method
        this.started = true;
    },

    stop: function() { // stop method
        this.started = false;
    },

    drive: function() { // drive method
        if(this.started) {
            return this.make + " " + this.model + " goes zoom!";
        } else {
            return "Engine is currently off!";
        }
    }
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    colour: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281300,
    started: false,

    start: function() { // start method
        this.started = true;
    },

    stop: function() { // stop method
        this.started = false;
    },

    drive: function() { // drive method
        if(this.started) {
            return this.make + " " + this.model + " goes zoom!";
        } else {
            return "Engine is currently off!";
        }
    }
};

chevy.start();
console.log(chevy.drive());
chevy.stop();



// a different way to iterate through the properties of an object is to use a "for in" loop
// we've been using object dot notation like chevy.make to get the value of the make property
// but you can also use chevy[make] to get the value of the make property, this is bracket notation,
// while the prop variable is iterating through you can use prop to print the property name and object[prop]
// to get the values of those properties!
for (var prop in chevy) {
    console.log(prop + ": " + chevy[prop]);
}
