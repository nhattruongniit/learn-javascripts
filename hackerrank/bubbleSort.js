/* Practice -> Interview Preparation Kit -> Sorting -> Sorting: Bubble Sort */
const arr = [6, 4, 1, 5];
let numSwaps = 0;
let firstEle = 0;
let lastEle = 0;

const swap = () => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        numSwaps++;
      }
    }
  }
  return {
    numSwaps,
    firstEle: arr[0],
    lastEle: arr[arr.length - 1]
  }
};

const result = swap();

console.log(result)