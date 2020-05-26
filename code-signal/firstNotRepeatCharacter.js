/* 
Given an array a that contains only numbers in the range from 1 to a.length, find the first 
duplicate number for which the second occurrence has the minimal index. In other words, 
if there are more than 1 duplicated numbers, return the number for which the second occurrence 
has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
*/

let newString = 'abacabacd';

function firstNotRepeatingCharacter(string) {
  let arr = string.split('');

  for (let i = 0; i < arr.length; i++) {
    console.log(arr.indexOf(arr[i]), arr.lastIndexOf(arr[i]))
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }

  return '_';
}

let notReat = firstNotRepeatingCharacter(newString);
console.log(notReat);
