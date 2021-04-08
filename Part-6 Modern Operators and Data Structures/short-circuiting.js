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


// Use ANY data type, return ANY data type, short circuiting, short-circuit evaluation
// If first operand is truthy when using OR, that first value will be returned, second operand wont even be looked at
console.log('----OR----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

// Short circuits entire evaluation and returns first truthy value
console.log(undefined || 0 || '' || 'Hello' || 23);


// Does not give proper result in practical example
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish coalescing operator, null and undefined, (NOT 0 or '')
// Only if the value is null or undefined would 10 be applied to the guestCorrect variable, hence it logs 0
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// AND operator short-circuits when encounters a falsy value and returns it, doesn't even look at other values
// when values are truthy it will return the last truthy value
console.log('----AND----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');