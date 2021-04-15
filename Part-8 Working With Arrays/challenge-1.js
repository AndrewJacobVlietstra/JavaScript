let dogAges1 = [3, 5, 1, 7, 2, 6];
let dogAges2 = [1, 3, 7, 4, 8, 2];

function checkAge(arr1, arr2) {
    dogAges1Correct = arr1.slice(1,-2); // correcting the cat ages at the first and two last elements
    let combinedArr = [...dogAges1Correct, ...arr2]; // combining the two passed in arrays

    combinedArr.forEach(function(age, i) {
        let dogAgeResult = age >= 3 ? 'an Adult' : 'still a Puppy 🐶';
        console.log(`Dog number ${i + 1} is ${age} years old and is ${dogAgeResult}`);
    });
}
checkAge(dogAges1, dogAges2);