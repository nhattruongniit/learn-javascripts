const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3

// Output: [1,2,2,3,5,6]

function mergeSorted(arr1, arr2) {
  arr1.splice(m, arr1.length, ...arr2.slice(0, n))
  arr1.sort((a, b) => a - b)
  return arr1
}

const result = mergeSorted(nums1, nums2);
console.log(result)