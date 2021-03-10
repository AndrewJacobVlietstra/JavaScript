const firstName = "Andrew";
const lastName = "Vlietstra";
let job = "Developer"
const birthYear = 1996;
let currentYear = 2021;

const andrew = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job + "!";

console.log(andrew);

// Strings can be a pain, so here we'll use a "template literal" instead to make life easier
const andrewNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;

console.log(andrewNew);

console.log(`Just a regular string here`);

console.log("String with \n\
multiple \n\
lines \n"); // this is a bug in JS apparently 

console.log(`String with
multiple
lines`); // with template literals the new lines are included automatically