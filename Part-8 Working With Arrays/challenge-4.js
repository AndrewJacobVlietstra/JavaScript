const dogs = [{
    name: 'Fido',
    weight: 22, // kg
    curFood: 250, // current food portion in g
    owners: ['Alice', 'Bob']
    },

    {
    name: 'Sparks',
    weight: 8,
    curFood: 200,
    owners: ['Matilda']
    },

    {
    name: 'Rex',
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John']
    },

    {
    name: 'Wizard',
    weight: 32,
    curFood: 340,
    owners: ['Michael']
    },
];

// 1.
function calcRecommendedFood(dogs) {
    for (i = 0; i < dogs.length; i++) {
        const recommendedFood = (dogs[i].weight ** 0.75) * 28;
        dogs[i].properFood = Math.trunc(recommendedFood);
    };
};
calcRecommendedFood(dogs);


// 2.
function findOwner(owner) {
    dogs.forEach(function(value, index, array) {
        const ownerIndex = dogs[index].owners.findIndex(person => person === owner);
        if(ownerIndex >= 0) {
            let foodDifference = dogs[index].curFood - dogs[index].properFood;
            console.log(`${owner} is the owner of ${dogs[index].name}`);
            console.log(`${dogs[index].name} is currently eating ${Math.trunc(Math.abs(foodDifference))} grams ${foodDifference > 0 ? '"more" than they should be.' : '"less" than they should be.'}`);
        };
    });
};
findOwner('Sarah');


// 3 & 4.
const ownersTooMuch = [];
const ownersTooLittle = [];

function ownersOfDogsEatingTooMuchOrTooLittle(dogs) {
    dogs.forEach(function(value, index, array) {
        let foodDifference = dogs[index].curFood - dogs[index].properFood;
        foodDifference > 0 ? ownersTooMuch.push(dogs[index].owners) : ownersTooLittle.push(dogs[index].owners);
    });
    console.log(ownersTooMuch.flat().map(owner => owner + '\'s').join(' and '), `dogs eat too "much"!`);
    console.log(ownersTooLittle.flat().map(owner => owner + '\'s').join(' and '), `dogs eat too "little"!`);
};
ownersOfDogsEatingTooMuchOrTooLittle(dogs);


// 5.
function checkExactProperFood(dogs) { // checking to see if any dog is eating the proper amount of food
    dogs.forEach(function(value, index, array) {
        let foodDifference = dogs[index].curFood - dogs[index].properFood;
        foodDifference === 0 ? dogs[index].eatsExactProperAmount = true : dogs[index].eatsExactProperAmount = false;
    });
};
checkExactProperFood(dogs);


// 6.
function checkOkayAmountOfFood(dogs) { // checking to see if any dog eats an okay amount, which is 10% below and above the proper food amount
    dogs.forEach(function(value, index, array) {
        (dogs[index].curFood >= 0.9 * dogs[index].properFood && dogs[index].curFood <= 1.1 * dogs[index].properFood) ? dogs[index].eatsOkayAmount = true : dogs[index].eatsOkayAmount = false;
    });
};
checkOkayAmountOfFood(dogs);


// 7.
const dogsEatingOkayAmount = [];

function dogsEatsOkay(dogs) { 
    dogs.forEach(function(dog, index, array) {
        if (dog.eatsOkayAmount) {
            dogsEatingOkayAmount.push(dog); // push all the dogs eating okay amounts to an array
        };
    });
    // console.log(dogsEatingOkayAmount);
};
dogsEatsOkay(dogs);


// 8. create shallow copy of dogs, and sort it in ascending order by proper food sizes
const dogsCopy = dogs.slice().sort((a, b) => a.properFood - b.properFood);
console.log(dogsCopy);