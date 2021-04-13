const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Andrew');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    
};

const book = lufthansa.book;

// Does not work, "this" keyword in this context points to undefined, as book is regular function call now, and not a method of lufthansa object
// book(23, 'Sarah Connors');

// Call method
// Points "this" keyword to a certain object, in this case, eurowings
book.call(eurowings, 23, 'Sarah Connors');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);


const swiss = {
    airline: 'Swiss',
    iataCode: 'LX',
    bookings: []
};

book.call(swiss, 583, 'Derrick Swanson');


// Apply method, similar to call method, except takes an array of arguments and passes that to the function instead
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // same as book.call(swiss, ...flightData);