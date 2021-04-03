const calcAvg = (x, y, z) => (x + y + z) / 3;

// Data Set 1
let avgDolphin1 = calcAvg(44, 23, 71); // Dolphin Score 1
let avgKoala1 = calcAvg(65, 54, 49); // Koala Score 1

// Data Set 2
let avgDolphin2 = calcAvg(85, 54, 41); // Dolphin Score 2
let avgKoala2 = calcAvg(23, 34, 27); // Koala Score 2

function checkWinner(avgDolphin, avgKoala) {
    if(avgDolphin > avgKoala && avgDolphin >= avgKoala * 2) {
        console.log(`Dolphin's has a greater average score that was also at least double the average of the other team! Dolphins Win!`);
    } 
    else if(avgDolphin < avgKoala && avgDolphin * 2 <= avgKoala) {
        console.log(`Koala's has a greater average score that was also at least double the average of the other team! Koalas Win!`);
    }
    else {
        console.log(`Neither team won!`);
    }
}

checkWinner(avgDolphin1, avgKoala1);
checkWinner(avgDolphin2, avgKoala2);