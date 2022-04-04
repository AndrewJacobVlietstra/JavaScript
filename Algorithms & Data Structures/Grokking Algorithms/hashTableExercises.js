// Log function
const log = (x) => console.log(x);

// Intersection function, compare two array and return a third array that contains similar values from the first two arrays
function calcIntersection(arr1, arr2) {
  // Initialize array to store intersection values
  const intersection = []

  // Hash table to store values from first array
  const store = {};

  // Loop through first array and store values that exist
  for (let i = 0; i < arr1.length; i++) {
    store[arr1[i]] = true;
  }

  // Loop through second array and determine which values in it match from the first array and add them to new array
  for (let i = 0; i < arr2.length; i++) {
    if (store[arr2[i]]) {
      intersection.push(arr2[i]);
    }
  }

  return intersection;
};

log(calcIntersection([1, 2, 3, 4], [2, 4, 8]));
// --------------------------------------------------------

// Function must return the first duplicate character in the array of strings and return that character
function returnfirstDuplicate(arr) {
  // Initialize a store to remember what values we already checked
  const store = {};

  // Loop through our given array of values, check if they're in the store, if not add them to the store, if already in the store, return that value
  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]]) {
      return arr[i];
    }
    store[arr[i]] = true;
  }
};

log(returnfirstDuplicate(['a', 'b', 'c', 'd', 'e', 'c']));
// ---------------------------------------------------------

// this function must accept a string that contains all letters of alphabet but return the one missing letter, in this case it should be 'f'
function returnMissingLetter(str) {
  if (typeof str !== 'string') { return 'Invalid Input, must be of type string'; }

  // Keep a list of all letters in the alphabet
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  // Initialize a store for comparison
  const store = {};

  // Loop through string, store letters that exist
  for (let i = 0; i < str.length; i++) {
    store[str[i]] = true;
  }

  // Delete space from object as it does not count
  delete store[' '];

  // Loop through letters array and compare the store against the letters array
  for (let i = 0; i < letters.length; i++) {
    if (!store[letters[i]]) {
      return letters[i];
    }
  }

  return 'String contains all letters!';
};

log(returnMissingLetter('the quick brown box jumps over a lazy dog'));
// --------------------------------------------------------------------

// Function must return first non-duplicated value, 'minimum' -> 'n' and 'u' are non-duplicates, but it should return 'n' as it is the first non-duplicate
function firstNonDuplicate(str) {
  if (typeof str !== 'string') { return 'Invalid Input'; }

  // Initialize a store to track count of each letter
  const store = {};

  // Loop through input string and track the count of each letter
  for (let i = 0; i < str.length; i++) {
    if (!store[str[i]]) {
      store[str[i]] = 1;
    } else {
      store[str[i]]++;
    }
  }

  // Loop through our store and return the first key with value of 1
  for (const letter in store) {
    if (store[letter] === 1) { return letter; }
  }
};

log(firstNonDuplicate('minimum'));