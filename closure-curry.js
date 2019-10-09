//=========== this is noop function
function noop() {};
noop('cat');
console.log('this is noop function');
console.log(noop('cat'));


//=========== this is identify function
function identify(value) {
    return value;
}
console.log('this is identify function');
console.log(identify({a : 'abc'}));


/* ============= Functions that evaluate to functions
- Functions are first class citizens in Javascript, which means that they are objects.
- Since they are objects, they can take functions as parameters, have methods bound to them, and even return functions.
*/
function valt() {
    return function() {
        return true;
    }
}
console.log(valt()());

/* ============== Closure =====================
- Creating a closure is nothing more than accessing a variable outside of a
function’s scope (using a variable that is neither bound on invocation or defined in the function body).
- To elaborate, the parent function’s variables are accessible to the inner function.
If the inner function uses its parent’s (or parent’s parent’s and so on) variable(s) then
they will persist in memory as long as the accessing functions(s) are still referenceable. In JavaScript, referenceable
variables are not garbage collected.

- Does a function inside a function mean you have a closure? No, a function inside of a function doesn’t have to reference
variables outside of its scope.

- A closure only exists when a function accesses a variable(s) outside of its immediate scope.
 */
console.log('this is closure function');
function foo(x) {
    function bar(y) {
        console.log(x + y);
    }
    bar(2);
}
foo(2);


let barClo = (function() {
    let private = [0, 1, 2];
    return function() {
        console.log(private)
    }
}());
barClo();


/* ===================== Currring ==================
- Currying is when you break down a function that takes multiple arguments into a series of functions that take part of the arguments.

 */

// normal function
function add(a, b) {
    return a + b;
}
let normalFunc = add(3, 4);
console.log('this is normal function: ' + normalFunc);

// This is a function that takes two arguments, a and b, and returns their sum. We will now curry this function:
function addCurry(a) {
    return function (b) {
        return a + b;
    }
}
let currryFunc = addCurry(3)(4);
console.log('this is curry function: ' + currryFunc);

// This is a function that takes one argument, a, and returns a function that takes another argument, b, and that function returns their sum.

// let curryOther = (field, message) => {
//     return (value, data) => {
//         console.log('field, message', field, message);
//         console.log('value, data', value, data);
//     }
// };
let curryOther = (field, message) => (value, data) => {
    console.log('field, message', field, message);
    console.log('value, data', value, data);
};

let aa = curryOther('firstname', 'please enter firstname');
aa('123', '23');