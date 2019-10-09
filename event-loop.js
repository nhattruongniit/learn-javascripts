// synchchronous
// [1, 2, 3, 4].forEach(function(i) {
//   console.log(i)
// })

// asynchronous
// function asyncForEach(array, cb) {
//   array.forEach(function() {
//     setTimeout(cb, 2000);
//   })
// }
//
// asyncForEach([1, 2, 3, 4], function(i){
//   console.log(i);
// });

// Cach 1:
let array = [1, 2, 3];
let i = 0;
let timeout;
function printOut() {
  if (i < array.length) {
    console.log(array[i]);
    i++;
    timeout = setTimeout(() => {
      printOut();
    }, 1000 * i);
  } else {
    clearTimeout(timeout);
  }
}
setTimeout(() => {
  printOut();
}, 1000);

// Cach 2: promise, async, await
let arrayPromise = [11, 22, 33];
let output = (value, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
};

let main = async () => {
  for (let i = 0; i < arrayPromise.length; i += 1) {
    console.log(await output(arrayPromise[i], i * 1000));
  }
};

main();

///////2
var a = 10;

function functionA() {
  console.log("Start function A");

  function functionB() {
    console.log("In function B");
  }

  functionB();
}

functionA();

console.log("GlobalContext");
