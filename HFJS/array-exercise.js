var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var costs = [ .25, .27, .25, .25, .25, .25,
              .33, .31, .25, .29, .27, .22,
              .31, .25, .25, .33, .21, .25,
              .25, .25, .28, .25, .24, .22,
              .20, .25, .30, .25, .24, .25,
              .25, .25, .27, .25, .26, .29];

var n = 0; // to iterate through indicies of maxNums if not using push
var maxNums = [];
var maxNum = 0;


// printing out each solution and its score, and then the highest score
function printAndGetHighScores(scores) {
    for (var i = 0; i < scores.length; i += 1) {
        console.log("Bubble solution #" + i + " score: " + scores[i]);
    
        if (scores[i] > maxNum) {
            maxNum = scores[i];
        }
    }
    return maxNum;
}

printAndGetHighScores(scores);
console.log("Total Tests: " + scores.length);
console.log("Highest score: " + maxNum);


// Pushing the indicies of the max number to the maxNums array
function pushMaxValuesToArray(scores, maxNum) {
    for (var i = 0; i < scores.length; i++) {

        if (scores[i] == maxNum) {
            maxNums.push(i); //push appends a value to the end of an array
    
            // lets say push didnt exist, how would we write the above line without push?
            // maxNums[n] = i;
            // n += 1;
        }
    }
    return maxNums;
}

pushMaxValuesToArray(scores, maxNum);
console.log("Solutions with highest scores: " + maxNums);


function getMostCostEffectiveSolution(scores, costs, maxNum) {

    cost = 100;
    index = 0;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == maxNum) {
            // console.log(costs[i]);
            if (cost > costs[i]) {
                cost = costs[i];
                index = i;
            }
        }
    }
    return index;

}

var costEffective = getMostCostEffectiveSolution(scores, costs, maxNum);
console.log("Solution #" + costEffective + " is the most cost effective! " + "Its cost is " + cost);