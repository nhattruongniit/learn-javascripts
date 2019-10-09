
/*

-John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

- For example, there are n=7 socks with colors ar=[1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.


- Sample: 
9
10 20 20 10 10 30 50 10 20
=> output: 3 pairs

*/

const ar = [1, 2, 1, 2, 1, 3, 2];
let totalPairs = 0;

const colors = ar.reduce((acc, curr) => {
  if(!acc[curr]) {
    acc[curr] = 1;
    return acc;
  }
  acc[curr] += 1;
  return acc;
}, {});

for(var color in colors) {
  totalPairs += Math.floor(colors[color] / 2);
}

console.log(totalPairs);
