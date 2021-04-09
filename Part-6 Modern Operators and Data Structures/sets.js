// Sets have unique elements, will not show multiples of the same element
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);
console.log(new Set('Andrew'));

console.log(ordersSet.size)

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

// Cannot retrieve values like an array, no index in sets, values are unique and order does not matter
console.log(ordersSet[0]);

// Remove all elements in set
// ordersSet.clear();
// console.log(ordersSet);

// Loop through elements of a set
for (const order of ordersSet) {
    console.log(order);
}

// One main use case of sets is to remove duplicate values from arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffSet = [...new Set(staff)]; // unpack elements from set and place them in a new array
console.log(staffSet);