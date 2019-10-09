
/* Array

- find & findIndex methods receive a callback function that will search for a value that satisfies the condition
 presented in testing function (callback).

- The different between find and findIndex is that the find method return the first value. The findIndex method return the index of the first value.


*/


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


const multipleOf13 = (element, index, array) => {
  return element % 13 === 0;
};

const result = numbers.findIndex(multipleOf13);

console.log(result);

console.log(numbers.includes(5,4))