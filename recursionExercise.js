function recursiveLine (i) {
  if (i == 5) return 1;
  return recursiveLine(i + 1);
}
// console.log(recursiveLine(1));


function reverseString(input) {
  
}
// console.log(reverseString('hello'));

// -----------------------------------------

// function reverseStringLoop (input) {
//   let reversedString = [];
//   for (let i = 0; i < input.length; i++) {
//     reversedString.unshift(input[i]);
//   }
//   return reversedString.join('');
// }

// console.log(reverseStringLoop('hello'));

// -----------------------------------------

const recursiveSumRange = (n, total = 0) => {
  if (n === 0) return total;

  return recursiveSumRange(n - 1, total + n);
};

console.log(recursiveSumRange(10));