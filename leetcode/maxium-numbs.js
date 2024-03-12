/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function findSmallestPositiveInteger(numbs) {
  const sortedArr = numbs.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
  let smallestInt = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === smallestInt) {
      smallestInt++;
    }
  }
  return smallestInt;
}

const input = [1, 3, 6, 4, 1, 2];
const res = findSmallestPositiveInteger(input);
console.log('maxium-numbs: ', res)