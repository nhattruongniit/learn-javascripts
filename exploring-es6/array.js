const arr = ['a', 'b', 'c'];
const obj = {0: 'a', 1: 'b' , 2: 'c'};

// arr.forEach((ele, i) => console.log(ele, i))

// for (const ele in arr) {
//   console.log(ele)
// }

for (const ele in obj) {
  console.log(obj[ele])
}
