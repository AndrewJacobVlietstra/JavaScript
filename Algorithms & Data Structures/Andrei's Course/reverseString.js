// Create a function that will reverse any given string
// ex. if you pass in 'Hi how are you?' -> '?uoy era woh iH'

function reverseString(string) {
  if (typeof string !== 'string' || string.length < 2) return 'Invalid Input!'; // Guard clause

  let reversedString = [];
  // Start from the end of the string and add each character
  for ( let i = string.length - 1; i >= 0; i-- ) {
    reversedString.push(string[i]);
  }
  return reversedString.join(''); // Join the array back into a string
}

console.log(reverseString('Hi how are you?'));