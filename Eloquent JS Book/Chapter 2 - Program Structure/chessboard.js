let boardSize = 8;
let board = "";
let counter = 0;

for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
        
        if ((x + y) % 2 == 0) {
            board = board + " "; 
        } else {
            board = board + "#";
        }
    }
    board = board + "\n";
}

console.log(board);