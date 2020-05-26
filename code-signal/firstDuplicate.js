/*
Given an array a that contains only numbers in the range from 1 to a.length, find the first
duplicate number for which the second occurrence has the minimal index. In other words,
if there are more than 1 duplicated numbers, return the number for which the second occurrence
has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
*/

const arrays = [2, 1, 3, 5, 5, 3, 2];


const firstDuplicate = arrays => {
  let obj = {};

  for (const value of arrays) {
    if (obj.hasOwnProperty(value)) return value;
    obj[value] = true
  }

  return obj;
}

const result = firstDuplicate(arrays);

console.log('first duplicate is: ', result)
























// let array = [2, 1, 3, 5, 3, 2];

// function firstDuplicate(array) {
//   let obj = {};

//   for (let i = 0; i < array.length; i++) {
//     if(obj.hasOwnProperty(array[i])) return array[i];
//     obj[array[i]] = true;
//   }

//   return -1;
// }

// let dup = firstDuplicate(array);
// console.log(dup); 