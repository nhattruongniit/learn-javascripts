/*
- https://medium.com/javascript-algorithms/javascript-algorithms-selection-sort-54da919d0513

- Time Complexity: O(n2)

- The idea behind selection sort is that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position. Then you loop through the array again using a linear scan and get the second smallest element, swap it to the second position, and so on and so forth until your array is completely sorted

*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[min], arr[j]);

      if (arr[min] > arr[j]) {
        min = j;
      }
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

const result = selectionSort([3, 2, 10, 1]);

console.log("Result: ", result);
