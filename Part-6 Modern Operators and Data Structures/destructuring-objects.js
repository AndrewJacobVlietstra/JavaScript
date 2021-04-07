'use strict';

const restaurant = {
    storeName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    category: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thursday: {
            open: 12,
            close: 22
        },
        friday: {
            open: 11,
            close: 23
        },
        saturday: {
            open: 0, // open 24 hours
            close: 24
        }
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // destructuring an object passed in as argument, to use the passed in object's properties as variables in the function
    orderDelivery: function({time, address, mainIndex, starterIndex}) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via de Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

const {storeName, openingHours, category} = restaurant;
console.log(storeName, openingHours, category);

// Can also assign new variable names to object properties when destructuring
const {storeName: name, openingHours: hours, category: tags} = restaurant;
console.log(name, hours, tags);

// default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);
console.log(a, b);

// Nested Objects
const {friday: {open, close}} = openingHours;
console.log(open, close);