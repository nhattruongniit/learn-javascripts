const input = [0,1,0,3,12]

function moveZero(arr) {
  let length = arr.length;
  let count = 0;
  for(let i = 0; i < length; i++) {
    if(arr[i] === 0) {
      arr.splice(i, 1);
      count++;
      i--;
    }
  }
  for(let i = 0; i < count; i++) {
    arr.push(0)
  }
  return arr
}

const res = moveZero(input)

console.log(res)