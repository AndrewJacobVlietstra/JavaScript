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

// 1) Destructuring

// Spread, because on the RIGHT side of "="
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of "="
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // notice how REST packs up elements into an array, whereas SPREAD unpacks elements from an array into individual values

// Objects
const { saturday, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


// 2) Functions, with REST arguments
const add = function(...numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');