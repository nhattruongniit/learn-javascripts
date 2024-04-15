/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Input: x = 121
Output: true

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Input: x = -101
Output: false
*/

const input = 121
function palindrome(x) {
  if(x <= 0) return false;
  const newNum = Math.abs(x).toString().split('').reverse().join('').toString();

  if(Number(x) === Number(newNum)) return true
  return false

}

const res = palindrome(input);
console.log(res)
