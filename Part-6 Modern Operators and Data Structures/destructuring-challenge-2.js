const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1) Print out players names and what order they scored goals in
for (let [i, j] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${j}`);
}


// 2) Calculate the average odd from all the odds
const values = Object.values(game.odds);
function calcAverageOdd(odds) {
    let sum = 0;
    for (let i = 0; i < odds.length; i++) {
        sum = sum + odds[i];
    }
    return console.log(sum = sum / odds.length);
}

calcAverageOdd(values);


// 3) Print out string with odd of victory or draw for the teams
const odds = Object.entries(game.odds);
for (let [team, odd] of odds) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}


// BONUS
const scorers = {};
for (let player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);