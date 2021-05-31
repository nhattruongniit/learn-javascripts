const input = nums = [0,0,1,1,1,2,2,3,3,4]
// output: 5, nums = [0,1,2,3,4]

function removeDuplicate(arr) {
  // way 1
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1]) {
      arr.splice(i, 1)
      i--
    }
  }

  // way 2
  // const newArr = arr.filter((ele, i) => arr.indexOf(ele) === i)
  return arr
}

const res = removeDuplicate(input);
console.log(res);