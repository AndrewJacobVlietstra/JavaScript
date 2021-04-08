const openingHours = {
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
};


const restaurant = {
    storeName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    category: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 enhance object literal, is simply included in this object
    openingHours,

    // Enhanced method syntax, can omit function keyword and colon
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // destructuring an object passed in as argument, to use the passed in object's properties as variables in the function
    orderDelivery: function({address, time = '20:00', mainIndex = 0, starterIndex = 1}) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with your ingredients ${ing1}, ${ing2} and ${ing3}.`)
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

console.log(restaurant.openingHours);
console.log(restaurant.order(0,1));