/*
    Both quack and fly functions have global scope. meaning they're visible everywhere in the code
    once they are defined. We need to consider nested function too, functions defined within
    other functions, because this will affect the scope of those functions.

    In JS only functions can introduce new scope!

*/

var migrating = true;

// functions defined at top level of your code have global scope, where as
// functions defined within other functions have local scope
var fly = function(num) {
    var sound = "Flying";

    function wingFlapper() { // wingFlapper is local to the fly function
        console.log(sound);
    }

    for (var i = 0; i < num; i++) {
        wingFlapper();
    }
}

function quack(num) {
    var sound = "Quack";

    var quacker = function() { // quacker is local to the quack function
        console.log(sound);
    }

    for (var i = 0; i < num; i++) {
        quacker();
    }
}

if(migrating) {
    quack(4);
    fly(4);
}
