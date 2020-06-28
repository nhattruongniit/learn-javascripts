// tra ve index cua 2 tổng 2 số = vs số target

const input = [2, 2, 3, 4];
// because 2 + 4 = 6

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

const result = twoSum(input, 6);

console.log("=====result=====", result);
