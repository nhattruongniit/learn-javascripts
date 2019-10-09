/* =================
Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases,
the parameter num will be any number from 1 to 1000. 

Ex:

Input:12
Output:78

Input:140
Output:9870
==================== */

function simpleAdding(number) {
  if (number <= 0) return false;
  if (number - 1 < number) {
    return number + simpleAdding(number - 1);
  }
}

const result = simpleAdding(12);
console.log("result: ", result);
