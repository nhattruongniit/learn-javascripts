const fetch = require("cross-fetch");

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

const apis = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/albums/1',
  'https://jsonplaceholder.typicode.com/photos/1'
]

Promise.all(apis.map(value => mapUrl(value))).then(json => console.log(json))

function mapUrl(url) {
  return fetch(url).then(res => res.json())
}
