// CODING CHALLENGE 1
console.log('CODING CHALLENGE 1');

function whereAmI(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            if(!response.ok) throw new Error(`Could not get a response! ${response.status}`); // rejects promise
            return response.json();
        })
        .then(data => {
            console.log(`You are in: ${data.city}, ${data.country}.`);
            getCountryData(`${data.country}`);
        })
        .catch(err => console.error(`${err.message}`)); // catches the rejected promise and handles it
};

// whereAmI('43.651070', '-79.347015'); // Toronto, Canada
// whereAmI('52.508', '13.381'); // Berlin, Germany
// whereAmI('19.076', '72.877'); // Mumbai, India
// whereAmI('-33.933', '18.474'); // Cape Town, South Africa