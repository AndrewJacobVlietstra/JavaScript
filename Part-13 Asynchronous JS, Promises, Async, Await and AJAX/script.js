'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


///////////////////////////////////////
// First AJAX call Lecture
console.log('First AJAX call Lecture');

const renderCountry = function(data, className = ''){
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbour = function(country){
    // AJAX Call Country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`); // looking by country name
    request.send();
    
    request.addEventListener('load', function(){
        // console.log(this); //returns object with response property in JSON format
        const [data] = JSON.parse(this.responseText); // convert JSON back to an object
        console.log(data);

        // Render country 1
        renderCountry(data);

        // Get neighbour country 2
        const [neighbour] = data.borders
        // console.log(neighbour);
        if(!neighbour) return;

        // AJAX Call Country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`); // looking by country code
        request2.send();

        request2.addEventListener('load', function(){
            // console.log(this);
            const data2 = JSON.parse(this.responseText);
            // console.log(data2);

            // Render country 2 on screen
            renderCountry(data2, 'neighbour');
        });
    });
};

// getCountryDataAndNeighbour('canada');
// getCountryDataAndNeighbour('usa');
// getCountryDataAndNeighbour('portugal');
// getCountryDataAndNeighbour('africa');


// Promises and Fetch API Lecture
console.log('Promises and Fetch API Lecture');

// Promises start out as "Pending", after async task has finished in background the promise is then "Settled"
// From this point on the promise can successfully return the data, this is called a "Fulfilled" promise
// if the the promise fails, it is then considered a "Rejected" promise.

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal'); // builds and returns a promise
// console.log(request);

// const getCountryData = function(country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(function(response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function(data){
//             console.log(data);
//             renderCountry(data[0]);
//         });
// };
// Same thing as above but using arrow functions and simpler code
const getCountryData = function(country) {
    // Country 1
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if(!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
            .then(response => response.json())
            .then(data => renderCountry(data, 'neighbour'));
        });
};

btn.addEventListener('click', function(){
    getCountryData('portugal');
});

