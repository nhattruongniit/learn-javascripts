const input =  [17,18,5,4,6,1];

function replace(arr) {
  let length = arr.length;
  let maxVal =  -1;
  for(let i = length - 1; i >= 0; i--) {
   let temp = arr[i]
   arr[i] = maxVal
   maxVal = Math.max(maxVal, temp)
  }
  
  return arr
}

const res = replace(input)

console.log(res)