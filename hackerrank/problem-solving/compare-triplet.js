/*

Input:
a = 5 6 7
b = 3 6 10

Output: 
1 1

If a[i] > b[i] , then Alice is awarded  point.
If a[i] < b[i] , then Bob is awarded  point.
If a[i] = b[i] , then neither person receives a point.

Alice receives 1 point, Bob receives 1 point. So we return the array [1, 1]

*/

const a = [5, 6, 7];
const b = [3, 6, 10];
const newArray = [];
let i = 0;
let j = 0;

function compareTriplets(a, b) {
  if (a[0] > b[0]) i = i + 1;
  if (a[0] < b[0]) j = j + 1;
  if (a[1] > b[1]) i = i + 1;
  if (a[1] < b[1]) j = j + 1;
  if (a[2] > b[2]) i = i + 1;
  if (a[2] < b[2]) j = j + 1;

  return [i, j];
}

const result = compareTriplets(a, b);

console.log("result: ", result);
