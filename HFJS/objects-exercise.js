// dog object
var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "chase a stick"
};

// cat object
var cat = {
    name: "Whiskers",
    weight: 8,
    age: 2,
    breed: "Orange Tabby",
    activity: "eat fish"
};

function loseWeight(pet, amount) {
    pet.weight = pet.weight - amount;
    console.log(pet.name + " lost " + amount + " pounds!")
    console.log(pet.name + " is now " + pet.weight + " pounds.");
}

// because the reference value is passed to the function from the reference variable cat
// the original object is affected in the function, as its working with the pointer that points
// to the actual object stored in memory
console.log(cat.weight);
loseWeight(cat, 2);
console.log(cat.weight); // after the loseWeight function is called, the cat object has indeed been reassigned a new weight value




function getSecret(file, secretPassword) {
    
}