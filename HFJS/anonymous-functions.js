// Lets take a look at anonymous functions...
// By using anonymous functions we can often make our code less verbose,
// more concise, more readable, more efficient, and even more maintainable.

function handler() {
    console.log("Yea this loaded, nice.");
}
// When page loads, the handler function is invoked
window.onload = handler;


// Now to make the above function anonymous, notice the function has no name now
window.onload = function() { console.log("The page is loaded!"); }


// Convert this to use anonymous function
function vaccine(dosage) {
    if (dosage > 0) {
        inject(dosage);
    }
}
administer(patient, vaccine, time);

// Converted vaccine function to an anonymous function
administer(patient, function(dosage) {
    if (dosage > 0) {
        inject(dosage);
    }
}, time)