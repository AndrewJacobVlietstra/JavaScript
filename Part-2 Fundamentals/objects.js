const andrewArray = [
    'Andrew',
    'Vlietstra',
    2021-1996,
    'Front End Dev',
    ['Colton', 'Matt', 'Evan']
];

const andrewObject = {
    firstName: 'Andrew', // property: value
    lastName: 'Vlietstra',
    age: 2021 - 1996,
    profession: 'Front End Dev',
    friends: ['Colton', 'Matt', 'Evan']
};

console.log(andrewObject);

console.log(andrewObject.lastName); // dot notation
console.log(andrewObject['lastName']); // bracket notation

const nameKey = 'Name';
console.log(andrewObject['first' + nameKey]); // bracket notation can take expressions

console.log(`Andrew has ${andrewObject.friends.length} friends and his best friend is ${andrewObject.friends[0]}`);