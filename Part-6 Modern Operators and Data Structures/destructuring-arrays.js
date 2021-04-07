'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    category: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const nums = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

// Destructuring the array, unpacking it and storing the values in variables
const [x, y, z] = nums;
console.log(x, y, z);
console.log(nums);

let [main, secondary] = restaurant.category;
console.log(main, secondary);

// to invert variables using destructuring operator
[main, secondary] = [secondary, main];
console.log(main, secondary);

// return array from a method and destructure it into variables right away 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [5, 7];
console.log(p, q, r); // this way r wont be undefined, instead it will be 1