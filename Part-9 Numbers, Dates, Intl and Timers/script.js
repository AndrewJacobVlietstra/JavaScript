'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2021-04-29T14:09:59.604Z',
    '2021-05-01T17:01:17.194Z',
    '2021-05-05T23:36:17.929Z',
    '2021-05-06T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date, locale) {
  
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} Days Ago`
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
  
  

}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// FAKE ALWAYS LOGGED IN
let currentAccount;
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;


///////////////////////////////////////
// Event handlers

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekday: 'long'
    };
    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer event listener
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

// Loan event listener
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// Close account event listener
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// Sort button event listener
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// CONVERTING AND CHECKING NUMBERS LECTURE
console.log('--CONVERTING AND CHECKING NUMBERS LECTURE--');
console.log(23 === 23.0);

// Base 10 -> 0-9
// Binary base 2 -> 0, 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e23'));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// Check if not a number, NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// check if finite number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

// Check if integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.1));
console.log(Number.isInteger(23 / 0));



// MATH AND ROUNDING LECTURE
console.log('--MATH AND ROUNDING LECTURE--');

// Square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

// Max number
console.log(Math.max(5, 16, 17, 4, 9, 20));
console.log(Math.max(5, 16, 17, 4, 9, '20'));
console.log(Math.max(5, 16, 17, 4, 9, '20px'));

// Min number
console.log(Math.min(5, 16, 17, 4, 9, 20));

// Pi number of math object
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random numbers
console.log(Math.trunc(Math.random() * 6) + 1);

// formula for random numbers in the range of min and max
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));


// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));


// Rounding floating points (decimals)
console.log((2.7).toFixed(0));
console.log(+(2.71).toFixed(2));



// REMAINDER OPERATOR LECTURE
console.log('--REMAINDER OPERATOR LECTURE--');

console.log(5 % 2); // 2 can go into 5 only two times, 1 is then left over as remainder
console.log(8 % 3); // 3 can go into 8 only two times, 2 is then left over as remainder
console.log(10 % 2); // 2 can go into 10 five whole times, there is no remainder leftover

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(5));

labelBalance.addEventListener('click', function() {
  [...document.querySelectorAll('.movements__row')]
  .forEach(function(row, i) {
    if(i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
    if(i % 3 === 0) {
      row.style.backgroundColor = 'blue';
    }
  });
});



// BIGINT LECTURE
console.log('--BIGINT LECTURE--');

// Biggest integer JS can safely represent
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// Big Int number, you cannot mix bigint numbers with regular numbers, will throw error
console.log(76348763425876342876435876438576876876n);
console.log(BigInt(76348763425876342876435876438576876876));

// Operations, Math object operations will not work, will throw conversion error
console.log(10000n + 10000n);
console.log(10000n * 10000n);
const huge = 8973489674587648576n;
// console.log(Math.sqrt(16n));


// Comparisons are fine, just not operations between bigint and normal numbers
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(typeof 20);
console.log(20n == 20);
console.log(20n == '20');

console.log(huge + ' is a really big number!');

// Divisions
console.log(10n / 3n);
console.log(10 / 3);



// CREATING DATES LECTURE
console.log('--CREATING DATES LECTURE--');

// const now = new Date();
// console.log(now);

// console.log(new Date('October 06 2020'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // converting to milliseconds

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142274980000));

console.log(Date.now()); // current time stamp

future.setFullYear(2040);
console.log(future);



// OPERATIONS WITH DATES LECTURE
console.log('--OPERATIONS WITH DATES LECTURE--');

const future2 = new Date(2037, 10, 19, 15, 23);
console.log(Number(future2));
console.log(+future2);

// const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(
//   new Date(2037, 3, 14), 
//   new Date(2037, 3, 24)
// );
// console.log(days1);




