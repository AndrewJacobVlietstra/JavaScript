let myObj = {
  name: 'Andrew',
  age: 26,

  // "this" in regular functions refers to the context in how the function is called, eg. what object called the function?
  // regular functions upon being invoked create their own execution context and this keyword
  whatIsThis() {
    return this;
  },

  // "this" here is not what calls the function, arrow functions do not have their own "this" keyword upon being invoked
  // instead they keep going up to parent scopes until they find one where "this" context is present and refer to that "this" context
  // so in this case it looks for "this" in the myObj scope, can't find it, and goes outside to global scope and finds "this" there and refers to it
  whatIsThisArrow: () => {
    return this;
  },

  // In this case it starts in the arrow function, no "this" context can be found, so it goes up to the regular function scope of "whatIsThisNested"
  // and finds a "this" context, which refers back to the object which calls this method
  whatIsThisNested() {
    return () => this;
  }
}

console.log(myObj.whatIsThis());
console.log(myObj.whatIsThisArrow());
console.log(myObj.whatIsThisNested()());


// --------------------------------------------------------------------------
// Because the function is defined in global scope, its like saying window.myFunc = function(){...}
function myFunc() {
  return this;
}

// So when this is called, technically were saying window.myFunc()
// Hence why this returns the window object, as window is the object that called the function
console.log(myFunc());

// ------------------------------------------------------------------------
class App {
  constructor(name) {
    // in the constructor "this" is automatically bound to the newly instantiated object and refers to it
    this.name = name;
    console.log(this);
  }
  // "this" will refer back to the object that calls the method, if you look at the prototype of either game in the console
  // you will see the sayThis method stored in the prototype of the constructor function
  //  REMEMBER functions have prototypes, not objects, the (game) objects link to the prototype of their constructor functions via __proto__ link in order to gain access to class methods
  sayThis() {
    return this;
  }

  // "this" also appears to refer back to the object in this case, however using arrow function directly attaches the function to the object
  // instead of keeping a reference to it through prototypal inheritance, which is more performant, so it seems to be better practice
  // to use regular function methods like "sayThis" above
  sayThisArrow = () => this;
}

const Game1 = new App('Candy Crush');
// console.log(Game1.sayThis());
// console.log(Game1.sayThisArrow());


const Game2 = new App('Sly Cooper');
// console.log(Game2);