
/*
- Cho 1 array random số. Hãy tìm số target có tồn tại trong array hay ko.

- Lưu ý: khi ta xài binary search (tìm kiếm nhị phân) thì array đó phải dc sort rùi.

- Time complexity: 0(logN)

*/
const input = [3,5,13,65,67,2,1];
const orders = input.sort((a, b) => a - b);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left  + right) / 2);
    if(arr[middle] === target) return true;
    if(target > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return false;
}

const result =  binarySearch(orders, 65);

console.log('====Result use binary search: ====', result);
