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

const account5 = {
  owner: 'Andrew Vlietstra',
  movements: [320, 2000, -700, 500, -150],
  interestRate: 1.35,
  pin: 1234,
};

const accounts = [account1, account2, account3, account4, account5];

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// CREATING DOM ELEMENTS LECTURE
const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = 
    `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);

function calcDisplayBalance(account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};


function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((interest) => interest >= 1)
    .reduce((acc, deposit) => acc + deposit, 0);
    labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);

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

function updateUI(account) {
  // Display movements
  displayMovements(account.movements);

  // Display balance
  calcDisplayBalance(account);

  // Display summary
  calcDisplaySummary(account);
};


// Event Handlers LOGIN LECTURE
let currentAccount;

btnLogin.addEventListener('click', function(e) {// e is an event object
  e.preventDefault() // prevent form from submitting, or reloading the page
  console.log('LOGIN');

  currentAccount = accounts.find(account => account.username === inputLoginUsername.value);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}.`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

  }
});

// Close account event listener
btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  let removalIndex;
  currentAccount = accounts.find(account => account.username === inputCloseUsername.value);
  
  if(inputCloseUsername.value === currentAccount?.username &&  Number(inputClosePin.value === currentAccount?.pin)) {
    removalIndex = accounts.findIndex(user => user === currentAccount);
    accounts.splice(removalIndex, 1); // start at the index of the element to be removed, and remove that 1 element
    console.log(accounts);
  }
});


// Request loan event listener
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Clear fields
    inputLoanAmount.value = '';

    // Update UI
    updateUI(currentAccount);
  }
});


// Transfer money event listener
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// Sort button event listener
let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});



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


// DATA TRANSFORMATIONS MAP LECTURE
console.log('---MAP METHOD---');
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


// FILTER METHOD LECTURE
console.log('---FILTER METHOD---');
const deposits = movements.filter(function(mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


// REDUCE METHOD LECTURE
console.log('---REDUCE METHOD---');
// accumulator is the sum of all previous values, current is current value, i is index, arr is the array
const balance = movements.reduce(function(accumulator, current, i, arr) {
  return accumulator + current;
}, 0); // start counting at a value of 0, NOT an index

console.log(balance);

// find max value example
const max = movements.reduce((acc, mov) => {
  if(acc > mov) {
    return acc;
  }
  else {
    return mov;
  }
}, movements[0]);
console.log(max);


// CHAINING METHODS LECTURE
console.log('--- CHAINING METHODS ---');

// Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


// FIND METHOD LECTURE
console.log('--- FIND METHODS ---');
// Find method will return the first element that satisfies this boolean expression
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


// SOME and EVERY LECTURE
console.log('--SOME and EVERY METHODS--');
console.log(movements);
// Checks for equality
console.log(movements.includes(-130));

// Specify a condition where 'some' elements meet a condition
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY method returns true only if 'every' element is true
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callbacks, define a condition and use it within different methods where needed
console.log('Separate CALLBACKS');
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


// FLAT and FLATMAP LECTURE
console.log('--FLAT AND FLATMAP--');
// Nested arrays, but flat method will return this as one array
const arrNested = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrNested.flat());

// flat method will only go one level of nesting deep by default, when flattening the array, 
// unless you specify the depth parameter that the flat method takes
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

// return an array of all the movement arrays
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

// this will return one array with all the movements
const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap, its essentially just a map method and flat method combined, all-in-one
// after the map is generated it is then flattened, flatMap can only go 1 level deep of nesting
// this cannot be changed, unlike flat where it can be specified
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);


// SORTING ARRAYS LECTURE
console.log('--SORTING ARRAYS--');

// Strings
const owners = ['Jonas', 'Zach', 'Andrew', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort()); // This will mutate the actual array, so be careful with this method

// Numbers
console.log(movements);
// Sort by default, converts everything to strings and sorts alphabetically
console.log(movements.sort());

// return < 0, A, B
// return > 0, B, A
// Ascending order
// console.log(movements.sort((a, b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
// }));

console.log(movements.sort((a, b) => a - b));

// Descending order
console.log(movements.sort((a, b) => {
  if(a > b) return -1;
  if(a < b) return 1;
}));


// CREATING AND FILLING ARRAYS LECTURE
console.log('-- CREATING / FILLING ARRAYS --');

console.log([1, 2, 3, 4]);
console.log(new Array(1, 2, 3, 4));

const x = new Array(7);
console.log(x);

// You can use fill on an "empty" array, which is just an array of undefined values
x.fill(1, 1, 6); // fill the array with 1's, starting at index 1, stopping at 6 and not including 6
console.log(x);

// From method, is a clean way of generating an array and filling it with values 'from' somewhere
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (current, i) => i + 1);
console.log(z);

// When total balance is clicked, log to the console all of the current account's movements
labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    element => Number(element.textContent.replace('€', ''))
    );
  console.log(movementsUI);

  // Another way of doing the from method, but with spread operator
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});


// ARRAY METHODS PRACTICE LECTURE
console.log('-- Array Practice --');

// 1.
const bankDepositSum = accounts
  .flatMap(account => account.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts
  .flatMap(account => account.movements)
  .filter(mov => mov > 1000).length;
console.log(numDeposits1000);

// 3.
const sums = accounts
  .flatMap(account => account.movements)
  .reduce((sums, cur) => {
    cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
    return sums;
  }, {deposits: 0, withdrawals: 0});
console.log(sums);


// 4.
// this is a nice title -> This Is a Nice Title
function convertTitleCase(title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return titleCase;

};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));