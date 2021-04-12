const flight = 'LH234'; // Primitive type variable (string)
const jonas = { // Reference type, (object variable)
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}

function checkIn(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 24739479284) {
        console.log('Checked In');
    }
    else {
        console.log('Wrong Passport!');
    }
}

checkIn(flight, jonas)
console.log(flight);
console.log(jonas);