let num = 1; // number to check logic against

function fizzBuzz(j = 100) { // j is iteration count
    for (let i = 0; i < j; i++) {
        if(num % 3 == 0 && num % 5 == 0) console.log('FizzBuzz');
        else if(num % 3 == 0) console.log('Fizz');
        else if(num % 5 == 0 && !(num % 3 == 0)) console.log('Buzz');
        else {console.log(num);}
        num++;
    };
};

fizzBuzz();