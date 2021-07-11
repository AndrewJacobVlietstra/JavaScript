let testArr = [1, 2, 3, 4, 5];

// this function will return a new array but with the elements of the original array reversed
function reverseArray(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
};

let reversedArr1 = reverseArray(testArr);
console.log(reversedArr1);
// console.log(testArr == reversedArr1); // "false" because this function returns a new array with different reference variable


// this function will reverse an array and return a reference to the same array
function reverseArrayInPlace(arr) {
    let length = arr.length; // initialize length or array before reversing it

    for (let i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]); // add a reversed array to it
    }

    arr.splice(0, length); // then trim off the original array using length

    return arr;
};

let reversedArr2 = reverseArrayInPlace(testArr);
console.log(reversedArr2);
// console.log(testArr == reversedArr2); // "true", same reference variable pointing to same array in memory
// console.log(testArr);