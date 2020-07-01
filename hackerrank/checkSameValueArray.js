function checkDuplicateArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
    return true;
  }
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const result = checkDuplicateArray(arr1, arr2);

console.log("Result: ", result);
