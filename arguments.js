


// Array-like object & argument

// const names = ['Minh', 'Hung', 'Truong'];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i])
// }

/* Cái gì array-like object ko có giống như array

1/ Ko có method

*/

const obj = {
  0: 'Minh',
  1: 'Hung',
  2: 'Truong',
  length: 3
}
for (let i = 0; i < obj.length; i++) {
  console.log(obj[i])
}

// convert array-like object to array
console.log('convert array-like object to array');
console.log('Cach 1: ', Array.from(obj));
console.log('Cach 2: ', Array.prototype.slice.call(obj));

// with es6
function foo(...args) {
  console.log('with es6: ', args);
}
foo(1, 23, 66, 25);



function sum() {
  // let result = 0;
  // for(let i = 0; i < arguments.length; i++) {
  //   result += arguments[i];
  // }
  // return result;

  const numbers = Array.from(arguments);
  return numbers.reduce(function(sum, num) {
    return sum + num;
  }, 0)
}
console.log(sum(5, 23, 55));