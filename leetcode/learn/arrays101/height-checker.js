const heights = [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Output: 3

function heightChecker(heights) {
 const expected = [...heights].sort((a, b) => {
   if(a < b) return - 1
   if(a > b) return 1
   if(a === b) return 0
 })
 let count = 0;

 for(let i = 0; i < heights.length; i++) {
    if(heights[i] !== expected[i]) {
      count++
    }
 }
 return count;
}

const res = heightChecker(heights);
console.log(res)