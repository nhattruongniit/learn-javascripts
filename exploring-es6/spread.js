const obj = {
 1: 'a',
 2: 'b',
 3: 'c'
}

const arr = ['a', 'b', 'c']

//const newObj = ['a', ...obj] // error: obj is not iterable
const newObj2 = ['a', {...obj} ]; // OK
const newArr = ['a', ...arr];

console.log(...arr);


