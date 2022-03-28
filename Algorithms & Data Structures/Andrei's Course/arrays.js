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

// Create an array from scratch

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    delete this.data[this.length - 1];
    this.length--;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1 ; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const newArray = new myArray();
newArray.push('a');
newArray.push('b');
newArray.push('c');
newArray.push('d');
newArray.push('e');
newArray.delete(1)
console.log(newArray);