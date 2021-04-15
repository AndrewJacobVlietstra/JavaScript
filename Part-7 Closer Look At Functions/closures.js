function secureBooking() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

// returned function is stored in the booker variable, and it has access to the variable environment of the function (execution context) in which it was created
const booker = secureBooking();
booker();

console.dir(booker);


// Example 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();

// Re-assigning f function
h();
f();


// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers!`);
        console.log(`There are 3 groups each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds!`);
}

boardPassengers(180, 3);