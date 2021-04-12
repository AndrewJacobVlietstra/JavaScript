const bookings = [];

function createBooking(flightNum, numPassengers = 1, price = 199) {
    // ES5
    // numPassengers = numPassengers || 1; // default value of 1
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 800); // undefined is same as not having passed an argument, so it will then take the default value, if one is set