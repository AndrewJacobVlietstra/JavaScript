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

// -----------------------------------------------------------------------------------------------------

// getter function
function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    } else {
        return "Invalid password! No Secrets for you!";
    }
}

// setter function
function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

// Secret file object
var superSecretFile = {
    level: "Classified",
    opened: 0,
    password: 123,
    contents: "Dr. Evel's next meeting is in Detroit."
};

// Get the contents of the secret file
var secret = getSecret(superSecretFile, 123);
console.log(secret);

// Set the contents of the secret file
setSecret(superSecretFile, 123, "I reset the secret contents! Muhaha!");
secret = getSecret(superSecretFile, 123);
console.log(secret);