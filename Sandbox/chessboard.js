let boardSize = 8;
let board = "";
let counter = 0;

for (let y = 0; y < boardSize; y+=1) {
    for (let x = 0; x < boardSize; x+=1) {
        
        if ((x + y) % 2 == 0) {
            board = board + " "; 
        } else {
            board = board + "#";
        }
    }
    board = board + "\n";
}
    

console.log(board);
// console.log(counter);

