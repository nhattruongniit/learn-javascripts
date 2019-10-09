/* 
For l = [3, 1, 2, 3, 4, 5] and k = 3, 
- Output should be
removeKFromList(l, k) = [1, 2, 4, 5];
*/

let l =  [3, 1, 2, 3, 4, 5]
let k = 3;

function removeFromList(l, k) {
  return l.filter(n => n != k);
}

const result = removeFromList(l, k);
console.log('result: ', result);