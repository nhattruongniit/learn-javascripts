
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/*
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

const nums = [-4,-1,0,3,10]

function sortSquare(arr) {
  const arrSquare = arr.map(ele => ele * ele).sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a === b) return 0
  })

 return arrSquare;
}


function sortSquare_2(arr) {
  let left = 0;
  let right = arr.length - 1;
  let newArr = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    const newLeft = arr[left] * arr[left];
    const newRight = arr[right] * arr[right];

    if(newLeft > newRight) {
      newArr[i] = newLeft;
      left++
    } else {
      newArr[i] = newRight;
      right--
    }
  }

 return newArr;
}

const res = sortSquare_2(nums);
console.log(res)