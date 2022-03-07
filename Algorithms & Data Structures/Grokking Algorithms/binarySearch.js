const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (array, valueToFind) => {
  // Initialize boundaries
  let lowIndex = 0;
  let highIndex = array.length - 1;
  let steps = 0;

  while (highIndex >= lowIndex) {
    // Increment steps by 1
    steps++;

    // Calculate the middle index of the array based off the low and high indicies
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    // Every iteration we want to check the middle element
    let guess = array[midIndex];
  
    // If guess is equal to value, return the value and what index it is located at
    if (guess === valueToFind) return console.log(`Value ${valueToFind} found at Index: ${midIndex}. Took ${steps} ${steps > 1 ? 'steps' : 'step'}.`);
  
    // If the guess is too low, update lower boundary accordingly
    if (guess < valueToFind) {
      lowIndex = midIndex + 1;
    } 
    // Else the guess was too high, update the higher boundary
    else {
      highIndex = midIndex - 1;
    }
  }
};

binarySearch(myArray, 8);