const strings = ['a', 'b', 'c', 'd'];

// push O(1)
strings.push('e');

// Pop O(1)
strings.pop();
strings.pop();

// Unshift O(n)
// Has to shift all indexs by one when adding a new element
strings.unshift('x');

// Splice O(n)
strings.splice(2, 0, 'Alien');

console.log(strings);