/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

Input:
1 2 3
4 5 6
9 8 9 

Output:
The left-to-right diagonal =  1 + 5 + 9 = 15
The right to left diagonal = 3 + 5 + 9 = 17

15 - 17 = 2;

*/

const input = "1 2 3,
4m 5 6,
9 8 9";

function diagonalDifference(input) {
  var lines = input.split("\n");
  var N = parseInt(lines[0]);
  var t = 0;
  for(i = 1; i <= N; i++) {
      var line = lines[i].split(" ");
      t += parseInt(line[i - 1]) - parseInt(line[N - i]);
  }
  console.log(Math.abs(t));
}

const result = diagonalDifference(input);

console.log("result: ", result);
