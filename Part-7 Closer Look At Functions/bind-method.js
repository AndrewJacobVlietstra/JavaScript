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

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    
};

const swiss = {
    airline: 'Swiss',
    iataCode: 'LX',
    bookings: []
};

// book is now a regular function, no longer a method of lufthansa object
const book = lufthansa.book;

// bind method will create a new function with body of the original function, but the "this" keyword is pointing to the passed in object
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);

bookLH(534, 'Andrew');
bookEW(23, 'Steven Williams');
bookLX(289, 'Jonas');