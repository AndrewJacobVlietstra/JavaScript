let arr1 = [5, 2, 4, 1, 15, 8, 3];
let arr2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(arr) {
    // Convert dog age to human age
    const dogAgeToHumanAge = arr.map(function(dogAge, i, arr) {
        const checkAge = `${dogAge <= 2 ? dogAge = dogAge * 2 : dogAge = 16 + (dogAge * 4)}`;
        return checkAge;
    });
    
    // Exclude all dogs under 18 human years
    const excludeYoungDogs = dogAgeToHumanAge.filter(function(dogAge, i, arr) {
        return dogAge > 18;
    });
    
    // Calculate average human age of all adult dogs
    const averageAge = excludeYoungDogs.reduce(function(accumulator, dogAge, i, arr) {
        return Number(accumulator) + Number(dogAge);
    });
    
    return console.log(averageAge / excludeYoungDogs.length);
};

calcAverageHumanAge(arr1);