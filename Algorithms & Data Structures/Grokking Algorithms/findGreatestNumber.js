function findMaxNumber(array) {
  if (!Array.isArray(array)) { return `Input must be of type 'Array'`; }

  let currentMax = 0;
  for (let i = 0; i < array.length; i++) {
    if (currentMax < array[i]) {
      currentMax = array[i];
    }
  }
  return currentMax;
}

console.log(findMaxNumber([5, -2, 10, 18, 100, 19, 37, 200, 74, 56]));
console.log(findMaxNumber({numbers: [5, -2, 10, 18, 100, 19, 37, 200, 74, 56]}));