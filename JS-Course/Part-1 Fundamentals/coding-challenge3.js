const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 123) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

// Check for higher average score
if (dolphinsAverageScore > koalasAverageScore) {
    console.log("Dolphins have a higher average score!");
} else if (dolphinsAverageScore === koalasAverageScore) {
    console.log("It's a tie of average scores!");
} else {
    console.log("Koala's have a higher average score!");
}

// Check for higher average score but when average score is above 100
if(dolphinsAverageScore >= 100 && koalasAverageScore >= 100 && dolphinsAverageScore === koalasAverageScore) {
    console.log("Both teams tied with average score above 100!")
} else if (dolphinsAverageScore >= 100 && koalasAverageScore >= 100 && dolphinsAverageScore > koalasAverageScore) {
    console.log("Dolphins win!");
} else if (dolphinsAverageScore >= 100 && koalasAverageScore >= 100 && dolphinsAverageScore < koalasAverageScore) {
    console.log("Koalas win!");
} else {
    console.log("Both teams did not have average score over 100 points!");
}
