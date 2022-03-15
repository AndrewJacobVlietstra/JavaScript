const log = element => console.log(element);

const nemo = ['dory', 'marlin', 'nemo'];

const largeArr = new Array(10000000).fill('marlin');
largeArr.push('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') return console.log(`Found Nemo at Index: ${i}`);
  }
}

// findNemo(nemo);
// findNemo(largeArr);


// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// Should be O(4n + 3) cause the loop will be dependent on the length of the input
// Can be simplified to O(n), drop the non-dominant terms and any coefficients
// ---------------------------------------------------------------------------------


// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// Should be O(7n + 4), operations within the loops are dependent on input size, whereas operations outside the loops are called once, when the function is invoked.
// Can be simplified to O(n)
// -----------------------------------------------------------

// How can we log all possible pair combinations of an array?
const myArray = [1, 2, 3, 4, 5];
const newArray = [];

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    // log(`Index ${i}: ${array[i]}`);
    for (let j = 0; j < array.length; j++) {
      newArray.push(`${array[i]}:${array[j]}`);
    }
  }
  return newArray;
};

log(logAllPairs(myArray));