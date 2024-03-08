/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/
function longest(strs) {
  if(!strs || strs.length === 0) return ''
  const sortedArr = strs.sort((a, b) => a.length - b.length)
  let shorted = sortedArr[0];
  while(!sortedArr.every(ele => ele.startsWith(shorted))) {
    if(shorted.length === 0) return;
    shorted = shorted.slice(0, -1);
  }
  return shorted
}

const res = longest(input);
console.log(res)