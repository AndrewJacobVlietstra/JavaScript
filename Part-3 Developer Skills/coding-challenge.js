'use strict';

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let finalForecast = "";
    let currentForecast;

    for (let i = 0; i < arr.length; i++) {
        currentForecast = `It will be ${arr[i]}C in ${i + 1} days...`;
        finalForecast = finalForecast + currentForecast;
    }
    console.log(finalForecast);
}

printForecast(arr1);
