/* 
We've already seen how functions can be assigned to variables, now we'll see that
you can also pass functions to other functions and also return functions from functions.

In JS think of functions as first-class values: a value that can be treated like any other
value in a programming language, including the ability to be assigned to a variable, 
passed as an argument, and returned from a function.

*/

// Here is a simple data structure, an array holding passenger objects that are on a flight
var passengers = [
    {name: "Jane Doloop", paid: true},
    {name: "Dr. Evil", paid: true},
    {name: "Sue Property", paid: false},
    {name: "John Funcall", paid: true} 
];

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evil")
}

function checkIfPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    return console.log(`${passenger.name} Paid: ${passenger.paid}`);
}

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