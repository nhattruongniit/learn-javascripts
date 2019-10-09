/* 
  Viết hàm nhận vào hai mảng và so sánh chúng có phải là mảng bình phương của nhau hay không?

  [1, 2, 3] <-> [1, 4, 9]
  [1, 2, 5] <-> [25, 1, 4] True

  --- Performance ---
*/


const arr1 = [1, 2, 5];
const arr2 = [1, 4, 25];

// way1
const square = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++){
    const correntIndex = arr2.indexOf(Math.pow(arr1[i], 2));
    if (correntIndex === -1) {
      return false;
    }
    arr2.splice(correntIndex, 1);
  }
  return true;
}

const result = square(arr1, arr2);
console.log('result code way1: ', result);


// way2 : frequency counter
const arr3 = [1, 2, 5];
const arr4 = [1, 4, 25];

const square2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for(let item of arr1) {
    obj1[item] = (obj1[item] || 0) + 1;
  }

  for(let item of arr2) {
    obj2[item] = (obj2[item] || 0) + 1;
  }
  
  for(key in obj1) {
    if (!(Math.pow(key, 2) in obj2)) return false;
    if (obj1[key] !== obj2[(Math.pow(key, 2))]) return false;
  }

  return true;
}

const result2 = square2(arr3, arr4);
console.log('result code way2: ', result2);
