const numbers = [-23, 4, -3, 8, -12];

const adjacentElementsProduct = numbers => {
  let max = 0;
  let temp;

  for (let i = 0; i < numbers.length - 1; i++) {
    temp = numbers[i] * numbers[i + 1];
    max = Math.max(max, temp);

    if (temp > max) {
      max = temp
    }
  };

  return max
}

const result = adjacentElementsProduct(numbers);

console.log(result);