// Given an array of numbers write a function that will return the first recurring character

const testArray = [1, 5, 8, 5, 0, 1, 0];

function firstRecur(arr) {
  let scannedItems = {};
  for (let i = 0; i < arr.length; i++) {
    if (scannedItems[arr[i]] !== undefined) {
      return `Value ${arr[i]} recurred at Index: ${i}`;
    } else {
      scannedItems[arr[i]] = i;
    }
  }
  return undefined;
}

console.log(firstRecur(testArray));