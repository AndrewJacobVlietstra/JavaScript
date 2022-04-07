// Create a stack, which is an abstract data structure, its an array that can only push, pop and read from the end of the stack
class stack {
  constructor(arr) {
    this.data = [...arr];
  }

  stackPush(payload) {
    return this.data.push(payload);
  }

  stackPop() {
    return this.data.pop();
  }

  stackRead() {
    return this.data[this.data.length - 1];
  }
}

const stack1 = new stack([1, 2, 3, 4, 5]);
// console.log(stack1);

// Write a function that can reverse an array of elements using the stack implementation
function stackReverse(stack) {
  console.log(stack);
}

stackReverse(stack1);