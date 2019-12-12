/* Practice -> Interview Preparation Kit -> Sorting -> Sorting: Bubble Sort */
const arr = [6, 4, 1];
const n = 3;
let numSwaps = 0;
let firstEle = 0;
let lastEle = 0;

const swap = () => {
  for (let i = 0; i < n - 1; i++) {
    if (arr[0] > arr[i + 1]) {
      const tmp = arr[0];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;
    }
    console.log(arr);

    // if (arr[i] > arr[i + 1]) {
    //   console.log(i);
    //   arr[0] = arr[i + 1];
    //   numSwaps++;
    // }
  }

  // console.log(arr, numSwaps);
};

swap();
