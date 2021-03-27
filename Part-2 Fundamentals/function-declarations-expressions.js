// Function declaration
function calcAge1(birthYear) {
    return 2030 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);



// Function expression
const calcAge2 = function calcAge1(birthYear) {
    return 2030 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age2);