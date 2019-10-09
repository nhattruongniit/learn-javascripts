const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const rotateImage = a => a.map((_, rowIndex) => a.map(val => val[rowIndex]).reverse());


console.log(rotateImage(a));