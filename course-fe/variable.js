// var x;
console.log('hoisting function: ', setFunctionScope)


var x = 1;

// hositing
// var x;
// x = 1

if (x === 1) {
  var x = 2;
  console.log('block scope x: ', x)
}

console.log('global scope x: ', x)

// function scope
function setFunctionScope() {
  var b = 12; // local variable
  console.log('setFunctionScope: ', b)
}

setFunctionScope();
// console.log('b: ', b) // expected is not defined