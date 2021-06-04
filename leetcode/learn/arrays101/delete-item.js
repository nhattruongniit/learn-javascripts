const input = [3,2,2,3];
const val = 3;

function removeEelement(arr, val) {
  let  i = 0;
  while(i < arr.length) {
    arr[i] === val ? arr.splice(i, 1) : i++
  }
  return arr.length
}

const res = removeElement_2(input, val);
console.log(res)