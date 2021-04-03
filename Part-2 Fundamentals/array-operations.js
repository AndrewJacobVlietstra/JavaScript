const friends = ['Michael', 'Steven', 'Bob'];

// Add elements
friends.push('Jay'); // push function appends a value to the end of an array
console.log(friends);


friends.unshift('John'); // unshift adds a value to the start of an array
console.log(friends);


// Remove elements
friends.pop(); //removes last element of an array
console.log(friends);

friends.shift(); // removes first element of an array
console.log(friends);


console.log(friends.indexOf('Steven')); // get the index position of a value

console.log(friends.includes("Steven")); // test to see if a value exists in the array, result is true or false