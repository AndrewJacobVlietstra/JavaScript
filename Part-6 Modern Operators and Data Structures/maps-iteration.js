const openingHours = {
    thursday: {
        open: 12,
        close: 22
    },
    friday: {
        open: 11,
        close: 23
    },
    saturday: {
        open: 0, // open 24 hours
        close: 24
    }
};

const question = new Map([
    ['question', 'What is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct!'],
    [false, 'Try again!']
]);
console.log(question);

// This structure of arrays within an array is similar to using Object.entries where we get back an array of arrays, with a key and a value
// Essentially when we were using Object.entries(object.property) we were converting that object to a map-like structure
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
const answer = Number('3');

console.log(question.get(answer === question.get('correct')));


// Convert map to array
console.log([...question]);

// Extract just the keys or values
console.log([...question.keys()]);
console.log([...question.values()]);