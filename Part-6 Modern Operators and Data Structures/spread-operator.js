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
    orderDelivery: function({address, time = '20:00', mainIndex = 0, starterIndex = 1}) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with your ingredients ${ing1}, ${ing2} and ${ing3}.`)
    }
};


const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr]; // writes out all the elements in an array, think of it as expanding it, if the "..." is omitted then you'll have an array inside an array
console.log(goodNewArr);

// Unpacks the array elements, spread operator is good for this
console.log(...goodNewArr);

// Creating new array, taking elements from another menu, and also adding a new element to the menu
const newMenu = [...restaurant.mainMenu, 'Oysters'];
console.log(newMenu);


// Copy Arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects!
const str = "Andrew";
const letters = [...str, '', 'V.'];
console.log(letters);

// Using spread operator to pass the values from an array as arguments to a function
const ingredients = ['Tomato sauce', 'Noodles', 'Vegetables'];
restaurant.orderPasta(...ingredients);


// Objects, makes brand new object, but using the properties from another object, and also added some new properties
const newRestaurant = {
    foundedIn: 1991,
    ...restaurant,
    founder: 'William',
};
console.log(newRestaurant);

// Object copy, makes a new object, with copied properties
const restaurantCopy = {...restaurant};
restaurantCopy.storeName = 'Ristorante Roma';
console.log(restaurant.storeName);
console.log(restaurantCopy.storeName);