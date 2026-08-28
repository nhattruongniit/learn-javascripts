/*
https://www.youtube.com/watch?v=U8UnNZhoPQk
Palindrome number is an number that reads the same backward as forward. 

For example:
121 → 121  ✅ palindrome
1221 → 1221 ✅ palindrome
123 → 321  ❌ 
-121 → 121- ❌ 
10 → 01     ❌ 

*/
function isPalindromeV1(x) {
  if (x < 0) return false;
  const newNum = Math.abs(x).toString().split('').reverse().join('');
  return Number(x) === Number(newNum);
}

console.log('isPalindromeV1: ', isPalindromeV1(121))

function isPalindromeV2(x) {
  if (x < 0) return false;

  let revNumber = 0;

  while (x > revNumber) {
    const d = x % 10;
    revNumber = (revNumber * 10) + d;
    x = Math.floor(x / 10);
  }
  return revNumber === x || x === Math.floor(revNumber / 10);
}
console.log('isPalindromeV2: ', isPalindromeV2(121))