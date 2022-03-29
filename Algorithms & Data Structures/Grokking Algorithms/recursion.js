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

console.log(factorial(5));