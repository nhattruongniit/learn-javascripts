/*
- https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c

- Time Complexity: O(n2)

- It’s best case run time is O(n), or linear, which occurs if the input array is already sorted. On average, insertion sort’s run time is still quadratic.

- Eg:

Iteration 0 (unsorted array): [5,3,1,4,6]
Iteration 1, key is 3 (was at index 1): [5,3,1,4,6] →[3,5,1,4,6]
Iteration 2, key is 1 (was at index 2): [3,5,1,4,6] →[1,3,5,4,6]
Iteration 3, key is 4 (was at index 3, ): [1,3,5,4,6] → [1,3,4,5,6]

*/

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }
  return arr;
}

const result = insertionSort([5, 3, 1, 4, 6]);

console.log("Result: ", result);
