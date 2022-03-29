function countDown(i) {
  if (i === 0) return console.log('Blast off!');
  console.log(i);
  countDown(i - 1);
}

// countDown(5);

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

// console.log(factorial(5));


function sumArray (arr) {
  if (arr.length === 0) {return 0};
  if (arr.length === 1) {return arr[0]};

  return arr[0] + sumArray(arr.slice(1));
}

// console.log(sumArray([0, 5, 10, 3]));



function countItemsInArray(arr, i) {
  if (i === arr.length - 1) return 1;

  return 1 + countItemsInArray(arr, i + 1);
}

// console.log(countItemsInArray([1, 2, 3, 4, 5], 0));


function findMaxNumber(arr) {
  arrCopy = arr.slice(); // copy array
  
  if (arrCopy.length === 1) { return arrCopy[0]; } // base case

  // remove the smaller of the two compared elements
  if (arrCopy[0] < arrCopy[1]) { arrCopy.splice(0, 1); }
  else {
    arrCopy.splice(1, 1);
  }
  return findMaxNumber(arrCopy); // recursive case, pass in smaller spliced array and repeat logic
}

// console.log(findMaxNumber([0, 5, 10, 20, 20, 3]));


function binarySearch(arr, find) {
  let mid = Math.floor(arr.length / 2); // each interation find the mid point

  if (arr.length === 1 && arr[0] !== find) { return false; } // base case return false if value not found
  if (arr[mid] === find) { return mid; } // base case return index if value found
  
  else if (arr[mid] < find) {
    return binarySearch(arr.slice(mid), find);
  }
  else if (arr[mid] > find) {
    return binarySearch(arr.slice(0, mid), find);
  }
}

// console.log(binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 12));
// console.log([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20].slice(0, 5));


function binarySearch2(arr, find, low, high) {
  let lowBoundary = low || 0;
  let highBoundary = high || arr.length - 1;
  let mid = Math.floor((lowBoundary + highBoundary) / 2); // each interation find the mid point
  console.log(`${lowBoundary}:${highBoundary}`);

  // if mid-point is the value then return the index
  if (arr[mid] === find) { return `Value ${arr[mid]} found at Index: ${mid}`; }

  // if mid value is lower, keep high boundary the same, but increase the lower boundary to the mid-point, excluding the mid-point
  else if (arr[mid] < find) {
    return binarySearch2(arr, find, mid + 1, highBoundary);
  }
  // if mid value is greater, keep low boundary the same, but lower the high boundary to the mid-point, excluding the mid-point
  else if (arr[mid] > find) {
    return binarySearch2(arr, find, low, mid - 1);
  }
  
}

console.log(binarySearch2([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 14));
// console.log([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20].slice(0, 5));