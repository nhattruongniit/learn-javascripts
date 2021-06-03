// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

/*
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Input: nums = [1,1]
Output: [2]
*/
 
const input = [4,3,2,7,8,2,3,1]

function findDisappearedNumbers(nums) {
  let set = new Set();
  for(let i = 0; i < nums.length; i++) {
    set.add(i + 1);
  }
  for (const num of nums) {
    set.delete(num);
  }
  return [...set];
}

const res = findDisappearedNumbers(input);
console.log(res)