// tra ve index cua 2 tổng 2 số = vs số target

const input = [2, 2, 3, 4];
// because 2 + 4 = 6

// way 1
function twoSumWay1(nums, target) {
  const hashTable = {};
  for(let i = 0; i < nums.length; i++) {
    const currVal = nums[i];
    if(currVal in hashTable) {
      return [hashTable[currVal], i]
    }
    hashTable[target - currVal] = i
  }
}

const result = twoSumWay1(input, 6);
console.log("result way 1: ", result);



const twoSum2 = function (nums, target) {
  const map = new Map();  
  for (let i = 0; i < nums.length; i++) {
    // map.set(i, nums[i])
    // map.has(key);
    //  map.get(key)

    const remain = target - nums[i];
    if(map.has(remain)) {
      return [map.get(remain), i]
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};


const result2 = twoSum2(input, 6);

console.log("result way 2: ", result2);
