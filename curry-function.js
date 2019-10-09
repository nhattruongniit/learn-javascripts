const notCurry = (x, y, z) => x + y + z; // a regular function
const curry = x => y => z => x + y + z; // a curry function

let xFunc = curry(2);
let yFunc = xFunc(3);

console.log(yFunc(3));

/* =========================== */
// const add = function (a, b) {
//     return a + b
// };
const add = (a, b) => (a + b);


// const addC = a => {
//     return b => {
//         return a + b;
//     }
// };
const addC = a => b => a + b;

const curryC = addC(1);
console.log('curryC', curryC(2));