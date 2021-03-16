var numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

// Sort method is destructive, in that it changes the given array, rather than returning a new array
numbersArray.sort(compareNumbers);
console.log(numbersArray);