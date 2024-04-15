/* Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

*/

const num = -123
function reverse(num) {
  const isNegative = num < 0;
  const strArr = Math.abs(num).toString().split('');
  const reverseArr = strArr.reverse().join('');
  const reverseNum = Number(reverseArr)

  if(isNegative && reverseNum > Math.pow(2, 31)) {
    return 0;
  }

  if(!isNegative && reverseNum > Math.pow(2, 31) - 1 ) {
    return 0
  }

  return isNegative ? -reverseNum : reverseNum
}


const res = reverse(num)
console.log(res)