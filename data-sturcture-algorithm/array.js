/* TODO: push first position array ======================= */

let numArray = [1, 2, 3, 4, 5];

for (let i = numArray.length; i >= 0; i--) {
  console.log(
    "push first position array =======================",
    numArray[i - 1]
  );
  numArray[i] = numArray[i - 1];
}

numArray[0] = -1;

console.log("=== push first position array ===", numArray);

/* TODO: remove first position array ======================= */
let removeArry = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

for (let i = 0; i < removeArry.length; i++) {
  removeArry[i] = removeArry[i + 1];
}

console.log("=== remove first position array ===", removeArry);

/* TODO: two-dimensional array  ================ */
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];
//day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;
console.log("=== start two-dimensional array ===");
function printMatrixTemp(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
printMatrixTemp(averageTemp);

/* TODO: multidimensional array ================ */
let matrix3x3x3 = [];

for (let i = 0; matrix3x3x3.length; i++) {
  for (let j = 0; matrix3x3x3[i].length; j++) {
    for (let z = 0; matrix3x3x3[i][j].length < 3; z++) {
      console.log(matrix3x3x3[i][j][j]);
    }
  }
}

console.log("=== multi-dimensional array ===");

/* TODO: iterating array even, odd ================= */
let itera = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let isEven = function(x) {
  console.log(x);
  return x % 2 == 0;
};

console.log("=== iterating array even, odd ===");
console.log(itera.filter(isEven));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf13(element, index, array) {
  return element % 13 == 0;
}
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));
console.log(numbers.includes(4, 3));
