const input = [2, 2, 2, 7];
const output = [1, 2]; // because 2 + 4 = 6

const twoSum = function (nums, target) {
  const remainders = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in remainders) {
      return [remainders[num], i];
    }
    remainders[target - num] = i;
  }
};

const result = twoSum(input, 9);

console.log("=====result=====", result);
