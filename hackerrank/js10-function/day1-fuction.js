/*

- Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

- 1 <= n <= 10

- Sample:

Input: 4
Output: 24

Explanation: 4! = 4 x 3 x 2 x 1 = 24

*/

function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  }

  return 1;
}

const result = factorial(4);

console.log(result);
