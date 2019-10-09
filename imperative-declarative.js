/* ===========================
IMPERATIVE 

- Procedural and OOP belong under imperative.

- Your code focuses on creating statements that change program states by creating algorithms.

- Your code will make use of conditinal statements, loops and inheritance.

================================*/

class Number {
  constructor(number = 0) {
    this.number = number;
  }

  add(x) {
    this.number = this.number + x;
  }
}

const myNumber = new Number(5);
myNumber.add(3);
console.log(myNumber.number);



/* ===========================
DECLARATIVE 

- Logic, functional and domain-specific belong under declarative.

- Functional programming based on lambda calculus is Turing complete, avoids states, side effects and muatation of data.

- You create expressions instead of statements and evaluate functions.

================================*/

const sum = a => b => a + b;
console.log('declarative', sum(2)(3));

