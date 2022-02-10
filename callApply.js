const array = [1,2,3];
 
function getMaxNumber(arr){
   return Math.max.apply(null, arr);
}
 
// console.log(getMaxNumber(array)); // should return 3

const character = {
   name: 'Simon',
   getCharacter() {
     return this.name;
   }
 };
 console.log(character.getCharacter());

 const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
 //How Would you fix this?
 console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't


// -------------------------------
const number = 100
const string = "Jay"

// Obj 1
let obj1 = {
  value: "a"
}
// Obj 2
let obj2 = {
  value: "b"
}
// Obj 3 is a reference to obj 2
let obj3 = obj2;
 
function change(number, string, obj1, obj2) {
  number = number * 10; // multiply number by 10
  string = "Pete"; // some new string "pete"
  obj1 = obj2; // obj 1 is now redefined to instead reference obj2
  obj2.value = "c"; // obj2's value is now defined as c
}
 
change(number, string, obj1, obj2);
 
//Guess the outputs here before you run the code: 
console.log(number); // 100
console.log(string); // Jay
console.log(obj1.value); // a
console.log(obj2.value); // c


// ----------------------------------
const multiplyBy = (multiplier) => {
  return function multiply(num) {
    return multiplier * num;
  }
}

const multiplyByTwo = multiplyBy(2);

console.log(multiplyByTwo(3));


// ----------------------------------
let view;
function initialize() {
  view = '⛰';
  console.log('view has been set');
}
initialize();
initialize();
initialize();
console.log(view);