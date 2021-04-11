const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);
console.log(airline.length);

// Gives first occurance
console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'));

// Gives last occurance
console.log(airline.lastIndexOf('r'));

// Sub-string of an original string, starts extracting at position 4, ends at 7 but does not include position 7
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// Extract a word and stop at the space
console.log(airline.slice(0, airline.indexOf(' ')));

// Extract last word, find last space, then add 1 to the index to not include the space
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Start extracting from the end, or start somewhere deeper in string and end early
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

function checkMiddleSeat(seat) {
    // B and E are middle seats
    seatLastIndex = seat.slice(-1);
    if(seatLastIndex === 'B' || seatLastIndex === 'E') {
        console.log(`The seat ${seat} is a middle Seat`);
    } else {
        console.log(`The seat ${seat} is NOT a middle Seat`);
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


// Fix capitalization in passenger name
function fixName(name) {
    const passenger = name; // Andrew
    const passengerLower = passenger.toLowerCase();
    const passengerCorrect = passengerLower[0].toUpperCase();
    console.log(passengerCorrect + passengerLower.slice(1));
}
fixName('anDrEW');


// Comparing emails
const email = 'hello@andrew.io';
const loginEmail = '  Hello@Andrew.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);


// Replacing strings or parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23! Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

// Now using regular expression, g is a global tag
console.log(announcement.replace(/door/g, 'gate'));


// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('A3'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
}

// Practice exercise
function checkBaggage(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log(`This passenger is NOT allowed on the plane!`);
    }
    else {
        console.log(`Welcome Aboard.`);
    }
};

checkBaggage('I have a laptop, some food and a pocket Knife.');
checkBaggage('Socks and a camera');
checkBaggage('Got some snacks and a gun for protection!');


// Split, breaks up string using a separator, returns substrings as elements in an array
console.log('a+very+nice+string'.split('+'));
console.log('Andrew Boisker'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

function capitalizeName(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for(let word of names) {
        namesUpper.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');


// Padding, makes a string specified length with a specified string of characters
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Andrew'.padStart(15, '123'));


function maskCreditCard(number) {
    const str = String(number);
    const last = str.slice(-4);
    const finalMask = last.padStart(12, '*');
    console.log(finalMask);
}
maskCreditCard(4337876324356547);


// Repeat strings
const message2 = 'Bad weather... All Departures delayed! ';
console.log(message2.repeat(3));