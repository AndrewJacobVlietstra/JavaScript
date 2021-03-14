// Generates a random number, * 5 will make it go as high as 4.99, so we use floor to always make it round down
// this will ensure anything like 0.129 will become 0, and 4.99 will become 4, so our position start
// can only be from 0 to 4

// var randomLocation = Math.floor(Math.random() * 5);
// var location1 = randomLocation;
// var location2 = location1 + 1;
// var location3 = location2 + 1;
// var guess;
// var hits = 0;
// var guesses = 0;
// var isSunk = false;

// while(!isSunk) {//loop condition is true while not sunk, once sunk it'll become false, as !true == false
//     guess = prompt("Ready, aim, fire! (enter a number from 0-6):"); //get user's guess from prompt function

//     if(guess == null) {
//         console.log("User quit game...");
//         break;
//     }
    
//     if(guess < 0 || guess > 6) { //check the validity of user's input
//         alert("Please enter a valid cell number!");
//     } else {
//         guesses = guesses + 1;
//     }

//     if(guess == location1 || guess == location2 || guess == location3) { //check if guess hit the ship
//         hits = hits + 1;
//         alert("HIT!");

//         if(hits == 3) {
//             isSunk = true;
//             alert("You sank my battleship! It took you " + guesses + " guesses!");
//         }

//     } else {
//         alert("MISS!");
//     }
// }

// View object, this is responsible for displaying message updates, and showing hits and/or misses
var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};


// The model object, this will manage the state and logic of the game, tests guesses for hits and misses
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    // Instead of managing 3 ship variables, we store all three ships in one array under the ships property
    // We represent the ships as objects at each index of the array, with locations and hits properties
    ships: [
        { locations: ["10", "20", "30"], hits: ["", "", ""] },
        { locations: ["32", "33", "34"], hits: ["", "", ""] },
        { locations: ["63", "64", "65"], hits: ["", "", "hit"] }
    ],

    fire: function(guess) {
        // Look at each ship in the ships property array
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];

            // for each ship in the array scan through its locations and compare to guess
            // if true, then mark hit at the same index in the hits array
            for (var j = 0; j < this.numShips; j++)
                if (ship.locations[j] == guess) {
                    ship.hits[j] = "hit";
                    // display the hit message and update the view
                    view.displayHit(guess);
                    view.displayMessage("HIT!");
                    // If the current ship has all its hit indicies == to "hit", increment shipsSunk by 1
                    if (this.isSunk(ship)) {
                        view.displayMessage("You Sank My Battleship!");
                        this.shipsSunk++;
                    }
                    return true;
                }
        }
        view.displayMiss(guess);
        view.displayMessage("You Missed!");
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,
    processGuess: function(guess) {
        
    }
};