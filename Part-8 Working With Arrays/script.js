'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// CREATING DOM ELEMENTS LECTURE
const displayMovements = function(movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = 
    `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);

const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
};

createUsernames(accounts);
console.log(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SIMPLE ARRAY METHODS LECTURE

// Slice method
console.log(`Slice Method`);
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log([...arr]);

// Splice Method
console.log(`Splice Method`);
console.log(arr.splice(2)); // extracts elements from array and mutates it
console.log(arr);

// Reverse method
console.log(`Reverse Method`);
let arr2 = ['a', 'b', 'c', 'd'];
console.log(arr2.reverse()); // mutates original array
console.log(arr2);

// Concat method
console.log(`Concat Method`);
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// Join method
console.log(`Join Method`);
console.log(letters.join(' - '));


// LOOPING ARRAYS LECTURE: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  }
  else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----FOREACH----');
// forEach method performs a specified action on each element of an array
// it returns the value of each element, the index, and the entire array every iteration
movements.forEach(function(value, index, array) {
  if(value > 0) {
    console.log(`Movement ${index + 1}: You deposited ${value}`);
  }
  else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(value)}`);
  }
});


// FOREACH MAPS AND SETS LECTURE
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});


// Sets, have no keys or index, only values
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){ // _ is a throwaway value for argument when its not needed
  console.log(`${value}: ${value}`);
});


// DATA TRANSFORMATIONS LECTURE, MAP, FILTER, REDUCE
const eurToUSD = 1.1;

const movementsUSD = movements.map(function(mov) {
  return mov * eurToUSD;
});

console.log(movements);
console.log(movementsUSD);


// Putting movements into an array
const movementsDescriptions = movements.map(function(mov, i) {

  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;

});
console.log(movementsDescriptions);