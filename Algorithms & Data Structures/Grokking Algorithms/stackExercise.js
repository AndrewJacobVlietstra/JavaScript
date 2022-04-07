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
  // Initialize an empty temporary stack for this function
  const tempStack = new stack([]);

  // Pop all stack elements and then add them to tempStack, but in reverse order
  for (let i = 0; i < stackLength; i++) {
    tempStack.stackPush(stackParam.stackPop());
  }

  // Return the data in reverse order
  return tempStack;
}

console.log(stackReverse(stack1));