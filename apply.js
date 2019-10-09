function sum() {
  const numbers = Array.from(arguments);
  console.log(numbers);
  return numbers.reduce((sum, num) => sum + num, 0)
}
var result = sum(1, 2, 3, 5);

function average() {
  const x = sum.apply(null, arguments);
  return x / arguments.length;

}

// console.log(result, average(1, 2, 3 ,5));


function factorial(n) {
  if(n == 0) {
    return 1
  } else {
    return factorial(n - 1) * n
  }
}

console.log(factorial(4))


///
function flip(fn){
  return function() {
    return fn.apply(null, Array.from(arguments));
  }
}

function sumFlip(a, b) {
  return a + b;
}

const y = flip(sumFlip);

console.log(y(5, 3));