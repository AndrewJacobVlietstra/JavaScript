function factorial(number) {
  if (typeof number !== 'number') { return 'Input must be of type number'; }
  if (number < 1) { return 'Input must be greater than 1'; }

  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

// console.log(factorial(5));


function sum(low, high) {
  if (high === low) return low;

  return high + sum(low, high - 1);
}

// console.log(sum(1, 10));
// ---------------------------------

const nestedArray = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10, 11, [12, 13, 14]]]];

// Write a function that can traverse an arbitrarily deeply nested array of elements and other arrays
function traverse(arr) {
  arr.forEach((value) => {

    // If the value itself is an array, call traverse on it to read the values in each sub-array
    if (Array.isArray(value)) {
      return traverse(value);
    }

    // Else its not an array, so log the value
    return console.log(value);
  })
};

// traverse(nestedArray);