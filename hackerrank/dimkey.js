/*

input [1, 2, 3] 
output [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]

*/

const array = [1, 2, 3];

const result = array.reduce((acc, curr) => {
  return acc.concat(acc.map(value => [curr, ...value]));
},[[]])

console.log(result);