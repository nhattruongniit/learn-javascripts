// link: https://leetcode.com/explore/learn/card/fun-with-arrays/

// duplicate Zeros
const input = [1, 0, 2, 3, 0, 4, 5, 0];
// output: [1, 0, 0, 2, 3, 0, 0, 4]

function duplicateZeros(arr) {
  let length = arr.length;
  for(let i = 0; i < length; i++) {
    if(arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.splice(arr.length - 1, 1);
      i++;
    }
  }
 return arr;
}

const resultDuplicateZeros = duplicateZeros(input);
console.log('duplicateZeros: ', resultDuplicateZeros)