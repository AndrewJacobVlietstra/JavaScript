var scores = [65, 50, 60, 58, 54, 54, 58, 50, 52, 54];
console.log(scores[0]); //arrays start at index 0, and go up from there

var flavours = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];
var flavourOfTheDay = flavours[4];
console.log(flavourOfTheDay);

flavours[2] = "peanut butter";
console.log(flavours);

//technically, strings and arrays are objects, same with console, and have their own properties
//hence why you can use a property such as length on those objects to return a value
console.log(flavours[0].length);//length of "vanilla" string is 7 characters
console.log(flavours.length);//length of the flavours array is 5 items, could be strings, numbers, booleans, other arrays and even objects...
console.log(flavours[flavours.length - 1]); //to get last item in any array, take the length of the array and subtract 1 to get the last index




function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution" , "tipping-point", "strategy" , "vision"];

    var rand1 = Math.floor(Math.random() * words1.length);//Generate a random number between 0 and 1 less than the length of the array
    var rand2 = Math.floor(Math.random() * words2.length);//this works though because the indexing starts at 0 and goes to 1 less
    var rand3 = Math.floor(Math.random() * words3.length);//than the length of the array

    //take the random number from 0 to 4 and call that index's value from the array to generate a random phrase
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    console.log(phrase);
}

makePhrases();