/*
Returning a function from a function isn’t the only way to create a closure. You
create a closure whenever you have a reference to a function that has free variables,
and that function is executed outside of the context in which it was created.

Another way we can create a closure is to pass a function to a function. The
function we pass will be executed in a completely different context than the one in
which it was defined. Here’s an example:

*/

function makeTimer(doneMessage, n) {

    // doneMessage is local to makeTimer's scope, if commented out, parameter is used instead
    var doneMessage = "Ouch, too hot!"; 
    
    setTimeout(function (){
        console.log(doneMessage); // doneMessage is a free variable in the scope of this function
    }, n);
    
}

makeTimer("Cookies are done!", 2000);




// What happens if our code is like this?
// function handler() {
//     console.log(doneMessage);
// }

// function makeTimer(doneMessage, n) {
//     setTimeout(handler, n);
// }

// makeTimer("Cookies are done!", 1000);


(function(food) {
    if (food === "cookies") {
        console.log("More please");
    } else if (food === "cake") {
        console.log("Yum yum");
    }
})("cookies");