const input = [5, 3, 10, 2, 9, 1, 8]

function selectionSort(arr) {
  const length = arr.length;
  let indexMin;

  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if(arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }

    if(i !== indexMin) {
      [arr[i] , arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr;
}

console.log(selectionSort(input))
// selectionSort(input)