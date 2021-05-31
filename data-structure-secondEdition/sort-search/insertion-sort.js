const input = [5, 3, 10, 2, 9, 1, 8]

function insertSort(arr) {
  const length = arr.length;
  let j;
  let temp;

  for(let i = 1; i < length; i++) {
    j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp
  }
  return arr;
}

const res = insertSort(input);
console.log(res);