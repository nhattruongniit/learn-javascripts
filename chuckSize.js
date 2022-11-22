const input = [4, 6, 7, 5, 2, 3, 5]
// output [[4, 6], [7, 5], [2, 2], [5]];

function chuckSize(arr, size) {
  const result = [];
  while(arr.length) {
    result.push(arr.splice(0, size))
  }
  return result;
}

const res = chuckSize(input, 2);
console.log('res: ', res)