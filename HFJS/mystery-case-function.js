var balance = 10500; // actual balance
var cameraOn = true;

//This function has balance as a parameter which gets a copy of the global balance value
//and is used as a local variable, thus any actions on balance inside this function
//will not affect the global balance variable, the global balance is being shadowed by the local balance inside this function
function steal(balance, amount) { //pass-by value here with actual balance
    cameraOn = false;
    if (amount < balance) { //uses a copy of the actual balance locally in the function
        balance = balance - amount; // not actually affecting the global balance variable
        console.log(balance);
    }

    return amount;
    cameraOn = true;
}

// This function actually affects the global balance variable because its not using balance as a parameter
//The function only has access to the global balance, so it will be reassigned a new value
function theft(take) {
    balance = balance - take; 
}

var amount = steal(balance, 1250);
console.log("Criminal: you stole " + amount + "!");

// theft(1000);
console.log(balance);