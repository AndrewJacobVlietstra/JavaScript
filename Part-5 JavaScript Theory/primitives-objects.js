// Primitive types
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

// Reference types
const me = {
    name: 'Jonas',
    age: 30,
};

// Not creating a copy of the object, but rather copying the reference value that points to the object
const friend = me;
friend.age = 27; // changing the same object property
console.log('Friend: ', friend);
console.log('Me: ', me);


// Copying objects
const me2 = {
    name: 'Jonas',
    age: 30,
};

const meCopy = Object.assign({}, me2); // wont work for objects nested within objects, makes a shallow copy, only copying 1st level properties
console.log(me2);
meCopy.name = 'Andrew';
console.log(meCopy);