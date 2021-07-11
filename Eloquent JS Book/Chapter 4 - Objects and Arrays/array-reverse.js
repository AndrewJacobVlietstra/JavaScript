let testArr = [1, 2, 3, 4, 5];

// this function returns a new array, with reversed elements
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


// this function modifies the array passed to it and reverses it (destructive behaviour)
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