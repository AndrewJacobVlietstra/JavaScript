console.log('PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS LECTURE');

// prototype shared between all objects created by Person constructor function
console.log(jonas.__proto__);

// Object.prototype (usually top of the prototype chain)
console.log(jonas.__proto__.__proto__);

// null, nothing after the top of the chain
console.log(jonas.__proto__.__proto__.__proto__);

// Points back to Person Constructor Function
console.dir(Person.prototype.constructor);

// Behind the scenes the new Array constructor is called
const arr = [3, 6, 3, 7, 4, 2, 4, 6]; // equivalent to "new Array === []"
console.log(arr.__proto__); // the array prototype object that has all the array methods we work with
console.log(arr.__proto__ === Array.prototype);

// We can create a new method that all arrays will gain access to through the prototype chain
// But this can be extended to more than just arrays, everything has a __proto__ property
Array.prototype.unique = function(){
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);