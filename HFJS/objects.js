var chevy = { // Describing a Chevy car as an object in JS
    make: "Chevy",
    model: "Bel Air", // you have a "property name: and a property value" separated by commas
    year: 1957,
    colour: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}; // make sure to end off the object with a semicolon

// [] are for arrays, {} are for objects

// variables can hold primitive types as they're smaller, but objects can be too large to fit inside a variable
// the cadi variable holds a reference value to where the actual object with the following properties is,
// the variable essentially points to where the object is stored in memory using a reference value
// a variable can hold a reference value inside it just like other primitive types, such as numbers, strings, booleans, null, undefined and symbols
var cadi = { 
    make: "cadillac",
    model: "GM Cadillac",
    year: 1955,
    colour: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

cadi.needsWashing = true;
// console.log(cadi);

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    colour: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281300
}

function buyCar(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

console.log(buyCar(taxi));

// Dog object with properties about the dog
// so dog is a reference variable that holds a reference value inside of it pointing to the dog object
// objects are typically too big to fit inside a variable
var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "chase a stick"
};


var bark;
if (dog.weight > 20) {
    bark = "WOOF";
} else {
    bark = "woof";
}

console.log(dog.name + " says " + bark + " when he wants to " + dog.activity);

delete dog.breed; // if you try to call a property that has been deleted you get back undefined
console.log(dog.breed); // delete will delete the property itself, not just the value

dog.age = 5; // you can also reasign an object's property
console.log(dog.age);
