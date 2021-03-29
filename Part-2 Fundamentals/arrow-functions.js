// Function declaration
function calcAge1(birthYear) {
    return 2030 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1);


// Arrow functions
// if one line the return is implicit
const calcAge2 = birthYear => 2037 - birthYear;
const age2 = calcAge2(1990);
console.log(age2);

// if multiple lines for the function, then you must put the return keyword
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
// log
console.log(yearsUntilRetirement(1996, "Joe Schmo"));