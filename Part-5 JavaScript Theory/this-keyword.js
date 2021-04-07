'use strict';

console.log(this);

function calcAgeDecl(birthYear) {
    console.log(this); // undefined in strict mode, otherwise point to global window object
};

calcAgeDecl(1991);

const calcAge = function(birthYear) {
    // console.log(2021 - birthYear);
    console.log(this); // undefined in strict mode, otherwise point to global window object
};

calcAge(1991);



const calcAgeArrow = (birthYear) => {
    // console.log(2021 - birthYear);
    console.log(this); // uses lexical "this" keyword in parent scope, which is global window object in this case, if nested functions then it would use its parent function
};

calcAgeArrow(1991);



const jonas = {
    year: 1991,

    calcAge: function() {
        console.log(this); // points to object calling the method
    }
};

jonas.calcAge();

const matilda = {
    year: 2017,
};

// Method borrowing from one object to another
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // "this" points to matilda when that object is using the method