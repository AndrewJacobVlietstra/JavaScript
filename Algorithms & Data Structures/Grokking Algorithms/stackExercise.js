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
const stack2 = new stack([]);
// console.log(stack1);

// Write a function that can reverse an array of elements using the stack implementation
function stackReverse(stackParam) {
  // Capture Initial length of stack
  const stackLength = stackParam.data.length;

  // Initialize an empty temporary store for this function
  const store = [];

  // Pop all stack elements and then add them to temporary store, but in reverse order
  for (let i = 0; i < stackLength; i++) {
    store.push(stackParam.stackPop());
  }

  // Loop through store and push values back to stack, now stack will contain all values but in reverse order
  for (let i = 0; i < store.length; i++) {
    stackParam.stackPush(store[i]);
  }

  // Return the original stack with data now in reverse order, data has been mutated to be in reverse order
  return stackParam;
}

console.log(stackReverse(stack1));
console.log(stack1);