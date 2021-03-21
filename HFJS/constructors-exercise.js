// Coffee constructor function
function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;

    this.getSize = function() {
        if (this.ounces === 8) {
            return "small";
        } else if (this.ounces === 12) {
            return "medium";
        } else if (this.ounces === 16) {
            return "large";
        }
    };

    this.toString = function() {
        return `You ordered a ${this.getSize()} ${this.roast}.`;
    };
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());


// Car constructor function
function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function() {
        this.started = true;
    };

    this.stop = function() {
        this.started = false;
    };

    this.drive = function() {
        if (this.started) {
            console.log(`${this.make} ${this.model} goes zoom!`);
        } else {
            console.log("Start the engine first.");
        }
    };
};

// Instead of writing the arguments in this way, lets re-write them as an object literal
// var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
// var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
// var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);
// var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

// var cars = [chevy, cadi, taxi, fiat, testCar];

// for (var i = 0; i < cars.length; i++) {
//     cars[i].start();
//     cars[i].drive();
// }

// Here we have the chevy's arguments in the form of an object literal
var chevyParams = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
};

var chevy = new Car(chevyParams);
console.log(chevy);

// instanceof is used to determine if an object is an instance of a certain constructor
// basically meaning that the object was created by this particular constructor function
// this returns true if the object was created by the specified constructor
if (chevy instanceof Car) {
    console.log("Congrats you have a Chevy!");
    console.log(chevy instanceof Car);
}