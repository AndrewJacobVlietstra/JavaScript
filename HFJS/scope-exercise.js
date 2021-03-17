// Specimen 1
var secret = "007"; // Global variable is unaffected

function getSecret() {
    var secret = "008"; // local variable is the one returned

    function getValue() {
        return secret; // return the value of secret
    }
    return getValue(); // return the result of getValue function
}
console.log(secret);
getSecret();


// Specimen 2
var secret = "007"; // global variable

function getSecret() {
    var secret = "008"; // local variable

    function getValue() {
        return secret; // returns local secret value
    }
    // this will return the secret value from the getValue function
    return getValue; 
}
console.log(secret);
// store the reference to the getSecret function in a variable
var getValueFun = getSecret();
// invoke the getSecret function by using the reference variable
getValueFun();