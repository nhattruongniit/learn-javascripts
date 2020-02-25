const arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7]
];

// result: [1, 2, 3, 4, 5, 6, 7]

const result = arr.reduce((acc, currValue) => {
  return acc.concat(currValue);
}, []);

console.log(result);