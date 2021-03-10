
// Logical AND -> &&, Logical OR -> ||, logical NOT -> !

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log("They are able to drive");
// } else {
//     console.log("Someone else should drive");
// }


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("They are able to drive");
} else {
    console.log("Someone else should drive");
}