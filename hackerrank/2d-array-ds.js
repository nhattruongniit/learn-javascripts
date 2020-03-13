/* Practice -> Interview Preparation Kit -> Arrays -> 2D Array - DS */

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const hourglassSum = arr => {
  let result = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
        if(sum > result) result = sum;
    }
  }
  return result;
};

const result = hourglassSum(arr);

console.log("The maximum hourglass is: ", result);
