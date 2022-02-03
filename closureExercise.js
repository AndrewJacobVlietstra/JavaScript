const array = [1, 2, 3, 4];

// for(let i = 0; i < array.length; i++) {
//     setTimeout(() => {
//         console.log('I am at index ' + i);
//     }, 3000);
// }

// with var it is considered a global variable, because var is function scoped, if there is no function then
// it is hoisted, its the same as below, by the time the setTimeouts all call log function to log out i,
// the loop is complete and the global i variable is at the value of 3
var i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i)
    }
    setTimeout(() => log(), 100);
}

// let is block scoped so each value of j will be captured in the arrow function on each run of the loop
// and then there is a setTimeout set up to log each instance of the function surrounded with its
// variable environment at the time.
for (let j = 0; j < 3; j++) {
    const log = () => {
        console.log(j)
    }
    setTimeout(() => log(), 100);
}