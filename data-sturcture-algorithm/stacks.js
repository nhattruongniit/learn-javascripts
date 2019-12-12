// PUSH & POP  = STACK DATA STRUCTURE

function Stack() {
  // properties and methods go here
  let items = [];

  /* Pushing elements to the stack
  - First method that we will implement is the push method.
  - This method is responsible for adding new elements to the stack.
  - We can only add new items to the top of the stack, meaning at the end of the stack.
  */
  this.push = function(element) {
    items.push(element);
  };

  /* Popping elements from the stack
  - Next, we are going to implement the pop method.
  - This method is responsible removing the items from the stack.
  */
  this.pop = function(element) {
    return items.pop();
  };

  /* Peeking the element from the top of the stack
  - We would like to know what the last item added to our stack.
  */
  this.peek = function() {
    return items[items.length - 1];
  };

  /* Verifying if the stack is empty
  - Next is isEmpty method which returns true if the stack is empty.
  */

  this.isEmpty = function() {
    return items.length == 0;
  };

  this.size = function() {
    return items.length;
  };

  /* Clearing & printing the elements of the stack.
  - Finally, we are going to implement the clear method.
  - This method simply empties the stack, removing all its elements.
  */
  this.clear = function() {
    items = [];
  };

  this.print = function() {
    return items.toString();
  };
}

let stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);
stack.pop();
stack.pop();

console.log("list item: ", stack.print());
console.log("last item pushed: ", stack.peek());
console.log("stack empty: ", stack.isEmpty());
console.log("stack size: ", stack.size());

/* TODO: convert decimal to binary ------_*/
function divideBy2(num) {
  let binaryStack = new Stack(),
    rem,
    binaryString = "";
  while (num > 0) {
    rem = Math.floor(num % 2);
    binaryStack.push(rem);
    num = Math.floor(num / 2);
  }
  while (!binaryStack.isEmpty()) {
    binaryString += binaryStack.pop().toString();
  }
  return binaryString;
}

let decimal = 50;
let binaryA = divideBy2(decimal);

console.log(`convert decimal is ${decimal} to binary is ${binaryA}`);

/* TODO: convert decimal to octagonal, hexadecimal ------

- from decimal to binary, the remainders will be 0 or 1.

- from decimal to octagonal, the remainders will be from 0 to 8.

- from decimal to hexadecimal, the remainders can be 0 to 8 plus the letters A to F (value 10 to 15)

*/

function baseConvert(num, base) {
  let binaryStack = new Stack(),
    rem,
    binaryString = "",
    digits = "0123456789ABCDEF";
  while (num > 0) {
    rem = Math.floor(num % base);
    binaryStack.push(rem);
    num = Math.floor(num / base);
  }
  while (!binaryStack.isEmpty()) {
    binaryString += digits[binaryStack.pop()];
  }
  return binaryString;
}

let decNum = 50;
let binary = baseConvert(decNum, 2);
let octagonal = baseConvert(decNum, 8);
let hexadecimal = baseConvert(decNum, 16);

console.log(`convert decimal is ${decNum} to binary is ${binary}`);
console.log(`convert decimal is ${decNum} to octagonal is ${octagonal}`);
console.log(`convert decimal is ${decNum} to hexadecimal is ${hexadecimal}`);
