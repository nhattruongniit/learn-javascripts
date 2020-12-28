// tra ve index cua 2 tổng 2 số = vs số target

const input = [2, 2, 3, 4];
// because 2 + 4 = 6

// way 1
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

console.log("result way 1: ", result);


const twoSum2 = function (nums, target) {
  const map = new Map();  
  for (let i = 0; i < nums.length; i++) {
    // map.set(key, value)
    // map.has(key) map.get(key)

    const remain = target - nums[i];
    if(map.has(remain)) {
      return [map.get(remain), i]
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};


const result2 = twoSum(input, 6);

console.log("result way 2: ", result2);