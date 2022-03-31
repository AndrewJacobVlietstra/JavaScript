// Maps can be used for hashTable functionality
const collection = new Map();

collection.set("apple", 0.67);
collection.set("milk", 1.49);
collection.set("avocado", 1.49);

for (let [key, value] of collection) {
  console.log(key, value);
}

console.log(collection.has('milk'));
console.log(collection.get('avocado'));

// Objects are also like a hashtable where you can instantly look up values
const phone_book = {};
phone_book["Jenny"] = 8675309;
phone_book["Emergency"] = 911;

console.log(phone_book["Jenny"]);