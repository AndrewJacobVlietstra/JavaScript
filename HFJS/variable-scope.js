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
// console.log(score); //throws a reference error, as score is not defined outside the function




function playTurn(player, location) {
    points = 0; //if you forget to declare a variable it will be Global automatically, there is no var keyword before points
    if (location == 1) {
        points = points + 100;
    }
    return points;
}

var total = playTurn("Jay", 1);
console.log(points);//we have access to points outside of the function because its a global variable




var beanCounter = 10; //this is known as shadowing your global variable

function getNumberOfItems (ordertype) {
    var beanCounter = 0; //any reference to beanCounter inside the function refers only to the local variable, not the global.
    if (ordertype == "order") { //So we say the global variable is in the shadow of the local variable.
        // do some stuff        // they are independent of each other and have no effect on one another
    }
    return beanCounter;
}