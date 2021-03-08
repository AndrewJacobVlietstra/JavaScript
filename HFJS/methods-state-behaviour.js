// Object properties track the "state" of the object, like on, off, hot, cold, full fuel, empty fuel, red, blue, etc
// Functions nested inside an object as a property (Object's methods) add behaviour to the object
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    colour: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    fuel: 0, // added fuel property

    start: function() {
        if(this.fuel > 0) {
            this.started = true;
        } else {
            return "You need to fill up on gas before starting!";
        }
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if(this.started) {
            if(this.fuel > 0) {
                this.fuel = this.fuel - 1;
                return this.make + " " + this.model + " goes zoom!";
            } else {
                this.stop();
                return "Uh oh out of fuel!";
            }
        } else {
            return "Engine is currently off!";
        }
    },

    addFuel: function(amount) { // added addFuel method, it also has a parameter "amount"
        this.fuel = this.fuel + amount;
        return "You added " + amount + " fuel to the " + this.make;
    }
};

console.log(chevy.start());
console.log(chevy.drive());

console.log(chevy.addFuel(2));
chevy.start();
console.log(chevy.drive());
console.log(chevy.drive());
console.log(chevy.drive());