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
  let maximum = 0;
  for (let i = 0; i <= 5; i++) {
    if (i <= Math.floor(arr.length / 2)) {
      for (let j = 0; j <= 5; j++) {
        if (j <= Math.floor(arr[i].length / 2)) {
          console.log("=========", i, j, arr[j + 2][i + 2]);
          maximum +=
            arr[i][j] +
            arr[i][j + 1] +
            arr[i][j + 2] +
            arr[i + 1][j + 1] +
            arr[j + 2][i] +
            arr[j + 2][i + 1] +
            arr[j + 2][i + 2];
        }
      }
    }
  }
  return maximum;
};

const result = hourglassSum(arr);

console.log("The maximum hourglass is: ", result);
