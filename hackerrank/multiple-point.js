/*
  Viết hàm nhận vào 1 mảng được sắp xếp từ nhỏ đến lớn
  Trả về mảng giá trị của cặp số đầu tiên có tổng bằng 0
*/

// Input
const testcase = [-4, -3, -2, -1, 0, 1, 2, 5]; // [-2, 2]

// way1
function sumZero(arr) {
  // Nested Loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}


const result = sumZero(testcase);
console.log('result code way1: ', result);


// way2 : frequency counter

function sumZero2(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let result = arr[i] + arr[j];

    if (result === 0) return [arr[i], arr[j]];

    if (result > 0) {
      j = j - 1;
    } else {
      i = i + 1;
    }
  }
}


const result2 = sumZero2(testcase);
console.log('result code way2: ', result2);
