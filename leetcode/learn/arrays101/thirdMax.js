// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

/*
Input: nums = [3,2,1]
Output: 1
Explanation: The third maximum is 1.
*/

const input = [2,2,3,1]

function thridMax(arr) {
  let length = arr.length;
  let max = null;
  let second_max = null;
  let third_max = null;

  for(let i = 0; i < length; i++) {
    const currVal = arr[i];
    if(currVal === max || currVal === second_max || currVal === third_max) {
      continue;
    }

    if(max === null || currVal > max ) {
      third_max = second_max;
      second_max = max;
      max = currVal;
    } else if(second_max === null || currVal > second_max ) {
      third_max = second_max;
      second_max = currVal;
    } else if(third_max === null || currVal > third_max ) {
      third_max = currVal
    } 
  }

  if(third_max === null) return max;

  return third_max

}

const res = thridMax(input);
console.log(res)