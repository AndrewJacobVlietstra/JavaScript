var randomLocation = Math.random();
var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(!isSunk) {//loop condition is true while not sunk, once sunk it'll become false, as !true == false
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):"); //get user's guess from prompt function

    if(guess == null) {
        console.log("User quit game...");
        break;
    }
    
    if(guess < 0 || guess > 6) { //check the validity of user's input
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }

    if(guess == location1 || guess == location2 || guess == location3) { //check if guess hit the ship
        hits = hits + 1;
        alert("HIT!");

        if(hits == 3) {
            isSunk = true;
            alert("You sank my battleship! It took you " + guesses + " guesses!");
        }

    } else {
        alert("MISS!");
    }

    
}


