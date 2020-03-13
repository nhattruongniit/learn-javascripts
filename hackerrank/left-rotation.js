/* Practice -> Interview Preparation Kit -> Sorting -> Mark and Toys */

const arr = [1, 2, 3, 4, 5];
let d = 4;

const rotLeft = (arr, d) => {
  for (let i = 0; i < d; i++) {
    let temp = arr[0];
    arr.shift();
    arr.push(temp);
  }
  return arr;
};

const result = rotLeft(arr, d);

console.log("The rotLeft: ", result);
