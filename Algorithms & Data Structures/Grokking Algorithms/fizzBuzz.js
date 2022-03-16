const log = x => console.log(x);

// Explicit way
function fizzBuzz(iterations) {
  for (let i = 1; i <= iterations; i++) {
    if (i % 3 === 0 && i % 5 === 0) log('FizzBuzz')
    else if (i % 3 === 0) log('Fizz')
    else if (i % 5 === 0) log('Buzz')
    else log(i);
  }
}

// fizzBuzz(100);

// Ternary operator way
function fizzBuzz2(iterations) {
  for (let i = 1; i <= iterations; i++) {
    (i % 3 === 0 && i % 5 === 0) ? log(`${i}: FizzBuzz`) : (i % 3 === 0) ? log(`${i}: Fizz`) : (i % 5 === 0) ? log(`${i}: Buzz`) : log(i);
  }
}

fizzBuzz2(100);