// implement add(2)(3)

// way1
// const add = (a) => (b) => {
//   return a + b;
// };

// way2
function add(x) {
  let sum = x;
  return function resultFn(y) {
    if (arguments.length) {
      sum += y;
      return resultFn;
    }
    return sum;
  };
}

const step1 = add(2)(3)(3)();

console.log(step1);
