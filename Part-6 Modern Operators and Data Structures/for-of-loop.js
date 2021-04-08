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
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// Make a menu by merging arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// loop through the menu logging each menu item
for (let i of menu) {
    console.log(i);
}

// entries function will also provide each element as an array with the index of each element
for (const i of menu.entries()) {
    console.log(i);
}

// since i is essentially an array in this case, we can use destructuring on it right inside the for of loop
for (const [i, el] of menu.entries()) {
    console.log(i, el);
}
