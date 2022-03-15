const nemo = ['dory', 'marlin', 'nemo'];

const largeArr = new Array(1000000).fill('marlin');
largeArr.push('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') console.log(`Found Nemo at Index: ${i}`);
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