/*
const a = [1,2,3,4,8,9,2,3,6,7]
const b = [2,6,7,4,9]
-> output = [1,3,8]
*/

const arr1 = [1,2,3,4,8,9,2,3,6,7]
const arr2 = [2,6,7,4,9]

const uniqueArray = () => {
  const arrays = arr1.concat(arr2);
  const hashMap = {};
  arrays.forEach(item => {
    if(item in hashMap) {
      hashMap[item] = true;
      return hashMap;
    }
    hashMap[item] = item
  })
  return hashMap
}

const res = uniqueArray();
console.log(res)