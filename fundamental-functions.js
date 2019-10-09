/* https://medium.com/front-end-hacking/6-fundamental-terms-in-functional-javascript-e25d50d40b2c */


/* ======================  lambda => arrow function? =========================== */
const lambda = (a, b) =>  a + b;



/* ====================== first-class functions 

- First-class functions that the type can be used as a value of a variable.

- A string is a first-class type as well as a function is a first-class type in JavaScript 

=========================== */

const handler = () => console.log('I am function');
// document.addEventListener('click', handler);



/* ====================== higher-order functions

- Higher-order function is a function that accepts other function as an argument or returns a function as a return value.

=========================== */

const firstOrder = () => console.log('first order strikes back!');

const higherOrder = whoStrikeBack => whoStrikeBack();

higherOrder(firstOrder);




/* ====================== unary functions

- Unary function (i.e. monadic) is a function that accepts exactly one argument.

=========================== */

const unaryFunction = message => console.log(message);

const binaryFunction = (color, message) => console.log(`message:${message}`, `color:${color}`);

const ternaryFunction = (func, color, message) => func(`message:${message}`, `color:${color}`);



/* ====================== Curry functions

- Curryng is the process of talking a function with multiple arguments and turning it intro a sequence of functions each with only a single  argument.

=========================== */

const binaryFunction = (a, b) => a + b;

const curryUnaryFunction = a => b => a + b;




/* ====================== Pure functions

- Pure function is a function where the return value is only determined by its arguments without any side effects.

=========================== */

let myPure = [];

const impureAddNumber = number => myPure.push(number);

const pureAddNumber = number => anArray => anArray.concat([number]);

console.log (impureAddNumber (2)); // returns 1
console.log (myArray); // returns [2]
console.log (pureAddNumber (3) (myArray)); // returns [2, 3]
console.log (myArray); // returns [2]
myArray = pureAddNumber (3) (myArray);
console.log (myArray); // returns [2, 3]