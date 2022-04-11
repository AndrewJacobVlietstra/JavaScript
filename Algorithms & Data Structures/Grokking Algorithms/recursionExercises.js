function factorial(number) {
  if (typeof number !== 'number') { return 'Input must be of type number'; }
  if (number < 1) { return 'Input must be greater than 1'; }

  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5));