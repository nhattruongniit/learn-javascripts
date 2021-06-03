const input = [3,1,2,4]

function parity(arr) {
  let length = arr.length;
  let result = [];
  let start = 0
  let end = length - 1;

  for(let i = 0; i < length; i++) {
    if(arr[i] % 2 === 0) {
      result[start] = arr[i];
      start++
    } else {
      result[end] = arr[i]
      end--
    }
  }
 return result;
}

const res = parity(input);
console.log(res)