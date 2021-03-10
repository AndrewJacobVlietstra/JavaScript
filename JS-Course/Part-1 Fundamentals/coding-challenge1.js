// Variables
let markWeight1 = 78; // kg
let markHeight1 = 1.69; // m
let johnWeight1 = 92;
let johnHeight1 = 1.95;

let markWeight2 = 95; // kg
let markHeight2 = 1.88; // m
let johnWeight2 = 85;
let johnHeight2 = 1.76;

// Calculate BMI for both Mark & John with both sets of data
let markBMI1 = markWeight1 / markHeight1 ** 2;
let markBMI2 = markWeight2 / markHeight2 ** 2;

let johnBMI1 = johnWeight1 / johnHeight1 ** 2;
let johnBMI2 = johnWeight2 / johnHeight2 ** 2;

// Log the findings
console.log("Mark BMI1: " + markBMI1);
console.log("John BMI1: " + johnBMI1);
console.log("Mark BMI2: " + markBMI2);
console.log("John BMI2: " + johnBMI2);

// Initialize some variables for checking if Mark's BMI is higher than John's
let markHigherBMI1;
let markHigherBMI2;

// If Mark's BMI is higher than John's, set markHigherBMI true, otherwise set false
if (markBMI1 > johnBMI1) {
    markHigherBMI1 = true;
} else {
    markHigherBMI1 = false;
}

if (markBMI2 > johnBMI2) {
    markHigherBMI2 = true;
} else {
    markHigherBMI2 = false;
}

// Log the findings...
console.log(markHigherBMI1, markHigherBMI2);