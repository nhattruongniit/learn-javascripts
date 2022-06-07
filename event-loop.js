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


//
const foo = () => console.log("foo");
const promise1 = new Promise(resovle => setTimeout(() => resovle('promise1'), 1000));
const bar0 = () => setTimeout(() => console.log("bar0"), 0);
const promise2 = new Promise(resovle => resovle('promise2'));
const bar5 = () => setTimeout(() => console.log("bar5"), 500);
const bar10 = () => setTimeout(() => console.log("bar10"), 1000); 
const baz = () => console.log("baz");

promise1.then(value => console.log(value))
promise2.then(value => console.log(value))
bar0();
bar10();
bar5();
foo();
baz();

// answer: foo -> baz -> promise 2 -> bar0 -> bar5 -> bar10 -> promise 1
