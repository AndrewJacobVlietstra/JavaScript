// Here is a simple dog object like we've seen before
var dog = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};

console.log(dog);

// Now we'll create a constructor that can create as many dog objects as we want
// by convention people capitalize constructor functions
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed; // assigning each parameter to what looks like a property, object-like
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            return this.name + " says Woof!";
        } else {
            return this.name + " says Yip!";
        }
    };
}

// new sets up an empty object, then sets "this" keyword to point to the new object
// Dog function then assigns values to the properties in the newly created object
// after function has completed, new operator returns "this", which is a reference to the new object
// after the object is returned, its object reference value is stored in a variable
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {

    var size = "small";

    if (dogs[i].weight > 10) {
        size = "large";
    }
    
    console.log(`Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed} and ${dogs[i].bark()}`);
}

