// '===' is the strict equality operator, does not perform type coercion
// '==' is the loose equality operator, performs type coercion

// '!==' is the strict not equal operator, does not perform type coercion
// '!=' is the loose not equal operator, performs type coercion
const age = 18;

console.log(age === 18);

console.log("18" === 18); // false because a string of 18 is not the same as number 18
console.log("18" == 18); // true because it coerces the types to be the same, string -> number