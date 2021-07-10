function countBs(str) { // this function takes a string and returns all capital B's in it
    return countChar(str, 'B'); // pass in the string and the character to count in the string
};

console.log(countBs('BubbleBathBombs'));


// made a more general version of countB's, this will take a string and a character to count
function countChar(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) counter++;
    }
    return counter;
};

console.log(countChar('BubbleBathBombs', 'e'));