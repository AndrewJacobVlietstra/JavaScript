/* 
We've already seen how functions can be assigned to variables, now we'll see that
you can also pass functions to other functions and also return functions from functions.

In JS think of functions as first-class values: a value that can be treated like any other
value in a programming language, including the ability to be assigned to a variable, 
passed as an argument, and returned from a function.

*/

// Here is a simple data structure, an array holding passenger objects that are on a flight
var passengers = [
    {name: "Jane Doloop", paid: true, ticket: "coach"},
    {name: "Dr. Evil", paid: true, ticket: "firstclass"},
    {name: "Sue Property", paid: false, ticket: "firstclass"},
    {name: "John Funcall", paid: false, ticket: "coach"},
    {name: "Douglas McDougal", paid: true, ticket: "premium"},
    {name: "Amy Bowtie", paid: true, ticket: "premium"},
    {name: "Benjamin Benson", paid: true, ticket: "coach"}
];

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evil")
}

function checkIfPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    return console.log(`${passenger.name}`);
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);

    getDrinkOrderFunction();
}


function createDrinkOrder(passenger) {
    var orderFunction;
    
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            console.log("Would you like a cocktail or wine?");
        }
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            console.log("Your choices are wine in addition to cola or water.");
        }
    } else {
        orderFunction = function() {
            console.log("Your choice is cola or water.");
        }
    }
    return orderFunction;
}

function prepDinnerOrder(passenger) {
    var getDinnerOrder = getDinnerOrderFunction(passenger);

    getDinnerOrder();
}

// Scan through all the passengers and then pass each passenger to the getDinnerOrderFunction
function prepareDinnerOrders(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        prepDinnerOrder(passengers[i]);
    }
}

// this function will then determine what their dinner will be based on their ticket
function getDinnerOrderFunction(passenger) {
    var dinnerFunction;

    if (passenger.ticket === "firstclass") {
        dinnerFunction = function() {
            console.log("Your dinner choices are chicken or pasta.");
        }
    } else if (passenger.ticket === "premium") {
        dinnerFunction = function() {
            console.log("Your dinner choices are the snack box or cheese plate.");
        }
    } else {
        dinnerFunction = function() {
            console.log("Your dinner choices are the peanuts or pretzels.");
        }
    }
    return dinnerFunction;
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

// Passing a function to a function here
function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("Plane can't take off! There is passenger on the no-fly list!");
}

var allPaid = processPassengers(passengers, checkIfPaid);
if (!allPaid) {
    console.log("Plane can't take off! Not Eveyone has paid!");
}

processPassengers(passengers, printPassenger);

servePassengers(passengers);

prepareDinnerOrders(passengers);