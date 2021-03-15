// So we have two function expressions here
var winner = function() { console.log("WINNER!") };
var loser = function() { console.log("LOSER!") };

// let's test as a warm up
winner();

// let's assign to other variables for practice
var a = winner;
var b = loser;
var c = loser;
a();
b();

// now let's try your luck with a shell game
c = a; // c is assigned winner
a = b; // a is assigned loser
b = c; // b is assigned winner
c = a; // c is assigned loser
a = c; // a is assigned loser
a = b; // a is assigned winner
b = c; // b is assigned loser

// At this point a should be winner
a();