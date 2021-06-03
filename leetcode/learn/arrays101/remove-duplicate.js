const input = nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// output: 5, nums = [0,1,2,3,4]

function remove_2(arr) {
  for(let i = 0; i <arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr
}

// i = 0 -> arr[0] === arr[1] -> [0,1,1,1,2,2,3,3,4] -> i--
// i = 0 -> arr[0] === arr[1] -> [0,1,1,1,2,2,3,3,4]
// i = 1 -> arr[1] === arr[2] -> [0,1,1,2,2,3,3,4]
// i = 2 -> arr[2] === arr[3] -> [0,1,2,2,3,3,4] -> i--
// i = 2 -> arr[2] === arr[3] -> [0,1,2,3,3,4] -> i--
// i = 2 -> arr[2] === arr[3] -> [0,1,2,3,3,4] 
// i = 3 -> arr[3] === arr[4] -> [0,1,2,3,3,4]  -> i --


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

const res = remove_2(input);
console.log(res);