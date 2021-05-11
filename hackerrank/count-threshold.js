/**
 # Write a function counting sets of three

Write a function that takes an array of positive integers and a threshold, and returns the number of sets of three which sum <= threshold.

For instance, for the array [1,2,3,4], it should consider the following sets:

* 1 2 3 (sum is 6)
* 1 2 4 (sum is 7)
* 1 3 4 (sum is 8)
* 2 3 4 (sum is 9)

So invoking countSetsOfThree([1,2,3,4], 7) should return 2.

Signature:

function countSetsOfThree(numbers, threshold) {
  // write here    
}

More test cases:

expect(countSetsOfThree([1,2,3,4], 7)).toEqual(2);
expect(countSetsOfThree([4,1,3,2], 7)).toEqual(2);
expect(countSetsOfThree([1,2,3,9], 7)).toEqual(1);
expect(countSetsOfThree([2,2,2,2], 7)).toEqual(4);
expect(countSetsOfThree([3,3,3,3], 7)).toEqual(0);
expect(countSetsOfThree([1,2,3,4,5], 7)).toEqual(2);

See index.ts for more information.

Don't worry about optimizing the solution. The simpler the solution the better.
 * 
 */