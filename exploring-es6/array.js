// const fetch = require("cross-fetch");

const arr = ['a', 'b', 'c'];
const obj = {0: 'a', 1: 'b' , 2: 'c'};

// arr.forEach((ele, i) => console.log(ele, i))

// for (const ele in arr) {
//   console.log(ele)
// }

// for (const ele in obj) {
//   console.log(obj[ele])
// }


/** handle array via promise */
// const apis = [
//   'https://jsonplaceholder.typicode.com/todos/1',
//   'https://jsonplaceholder.typicode.com/albums/1',
//   'https://jsonplaceholder.typicode.com/photos/1'
// ]

// Promise.all(apis.map(value => mapUrl(value))).then(json => console.log(json))

// function mapUrl(url) {
//   // return fetch(url).then(res => res.json())
// }




const names = ['Alice', "Alice", "Bob", 'Tiff', 'Bruce', 'Alice'];

const newNames = names.reduce(function(acc, curr) {
  //  curr in acc
  // Object.keys(acc).indexOf(curr) > -1
  if(curr in acc) {
    acc[curr]++; 
  } else {  
    acc[curr] = 1
  }
  return acc
}, {});

// 0: acc = {}, curr = Alice;
// if (Alice in acc) way2
// if (Object.keys(acc).indexOf('Alice') > -1) { way1
//   {
//     "Alice": xxx
//   }
// } else {
//   {
//     "Alice": 1
//   }
// }

// 1: acc = { "Alice": 1 }, curr = Alice;
// if (Alice in acc) way2
// if (Object.keys(acc).indexOf('Alice') > -1) {
//   {
//     "Alice": 2
//   }
// } else {
//   {
//     "Alice": 1
//   }
// }

// 2: acc = { "Alice": 2 }, curr = Bob;
// if (Object.keys(acc).indexOf('Bob') > -1) {
//   {
//     "Alice": 2
//   }
// } else {
//   {
//     "Alice": 2,
//     "Bob": 1
//   }
// }

console.log('newNames: ', newNames)


const objNew = { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }
if("Alice" in objNew) {
  console.log('true: Alice')
} else {
  console.log('false: Alice')
}