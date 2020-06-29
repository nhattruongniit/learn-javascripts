/*
- https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2

- Time Complexity: O(n2)

- It’s best case run time is O(n), or linear, which occurs if the input array is already sorted. On average, insertion sort’s run time is still quadratic.

- The idea behind bubble sort is that every pair of adjacent values is compared, and then the two values swap positions if the first value is greater than the second. This way during each pass through the array, the largest value “bubbles up” to the top, and after each pass the elements furthest to the right are in the correct order.

- Eg: 

Iteration 1: [5,3,1,4,6] → [3,5,1,4,6] → [3,1,5,4,6] → [3,1,4,5,6] → [3,1,4,5,6]
Iteration 2: [3,1,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6]
Iteration 3: [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6]

*/

function bubbleSort(arr) {
  // way 1
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //   }
  // }

  // way 2
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  } while (swapped);
  return arr;
}

const result = bubbleSort([5, 3, 1, 4, 6]);

console.log("Result: ", result);
