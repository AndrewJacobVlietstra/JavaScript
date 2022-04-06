// Create a stack, which is an abstract data structure, its an array that can only push, pop and read from the end of the stack
class stack {
  constructor() {
    this.data = [];
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

const stack1 = new stack();

stack1.stackPush(1);
stack1.stackPush(2);
stack1.stackPush(3);
stack1.stackPush(4);

stack1.stackPop();
console.log(stack1.stackRead());


console.log(stack1);