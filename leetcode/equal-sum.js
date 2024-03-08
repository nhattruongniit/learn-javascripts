// [1, 2, 3, 9] // no
// [1, 2, 4, 4] // yes because 4 + 4 = 8.

// Tìm tổng 2 số liền kề = với số đã cho. sum = 8
const nums = [1, 2, 4, 4];

function equalSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] + nums[i + 1] === target)  {
      return [nums[i], nums[i + 1]];
    }
  }
}
const result = equalSum(nums, 6);
console.log(result);
