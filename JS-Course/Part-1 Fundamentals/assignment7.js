numNeighbours = Number(prompt("How many neighbours do you have?")); // prompt function returns a string

if (numNeighbours === 1) {
    console.log("Only 1 neighbour!");
} else if (numNeighbours > 1) {
    console.log("More than 1 neighbour!");
} else {
    console.log("No neighbours!");
}