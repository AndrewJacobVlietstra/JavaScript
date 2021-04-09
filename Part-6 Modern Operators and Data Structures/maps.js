// Can set a key and then a value associated with that key in a map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
    .set('category', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open!')
    .set(false, 'We are closed')

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));

// Check if open using boolean logic
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('category'));

rest.delete(2);
console.log(rest);

// Clear all elements with rest.clear()

// Using an array as a map key
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);

console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');