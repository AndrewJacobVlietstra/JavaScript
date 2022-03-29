const testArray = [5, 8, 0, 2, 9, 0];
const testArray2 = [-10, -30, -96, 100, 5, 5, 22, 19, 7, 8, -1, 0, 2, 9, 0, -5];

function findSmallest(arr) {
  let smallestValue = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < smallestValue) {
      smallestValue = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let arrayCopy = [...arr]; // using pop affects the length and cuts the loop short, so use copy of array to keep length constant
  let newSortedArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    let currentSmallestIndex = findSmallest(arrayCopy);
    newSortedArr.push(...arrayCopy.splice(currentSmallestIndex, 1));
  }
  return newSortedArr;
}

console.log(selectionSort(testArray));
console.log(selectionSort(testArray2));