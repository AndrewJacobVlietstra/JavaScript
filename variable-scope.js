var avatar;
var levelThreshold = 1000; //These variables are "Global", and can be used anywhere in this file

function getScore(points) {
    var score; //these variables are "Local" to this function because they were declared inside the function
    var i = 0; //they cannot be used outside of the function, the program doesn't know they exist outside the function
    while (i < levelThreshold) {//we can use levelThreshold inside this function as its declared outside the function, and is a global variable
        //some code here
        i = i + 1;
    }
    return score;
}

console.log(levelThreshold * 2); //here we can use global variables
console.log(score); //throws a reference error, as score is not defined outside the function