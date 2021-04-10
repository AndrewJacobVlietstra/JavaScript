const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow Card'],
]);
console.log(gameEvents);

// 1) Create an array of events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2) Remove the yellow card at minute 64 from events array
gameEvents.delete(64);
console.log(gameEvents);

// 3) Print a string to console that an event happened on average every 9 minutes
const gameTime = [...gameEvents.keys()].pop();
console.log(gameTime);
console.log(`An event happened, on average, every ${gameTime / gameEvents.size} minutes`);

// 4) Loop over events array and log them to console, marking whether the events are in first half the game or second half (after 45 mins)
for (let [time, event] of gameEvents) {
    console.log(`[${time < 45 ? 'First Half' : 'Second Half'}] ${time}: ${event}`);
}
