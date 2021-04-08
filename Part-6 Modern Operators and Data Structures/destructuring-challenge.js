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

// 1) Create players array for each team
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
[players1, players2] = game.players;
console.log(players1, players2);

// 2) Separate Goal keeper from field players on team 1, gk is first player on team
const [goalKeeper, ...fieldPlayers] = players1;
console.log(goalKeeper, fieldPlayers);

// 3) Create allPlayers array containing all players from both teams
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4) Team1 used 3 substitute players, create new array of team1 players plus substitute players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5) Based on game.odds object, create a variable for each odd(called 'team1', 'draw' and 'team2')
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

// 6) write a function 'printGoals' that takes arbitrary number of player names (NOT array) and prints each name to console, along with number of goals scored
function printGoals(...playersWhoScored) {
    console.log(`${playersWhoScored.length} goals were scored!`);
}
printGoals('Davies', 'Muller', 'Lewandowski');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7) Print which team is more likely to win without using if/else or ternary operator, lower odds is more likely to win
team1 < team2 && console.log(`Team 1 is more likely to win!`);
team1 > team2 && console.log(`Team 2 is more likely to win!`);