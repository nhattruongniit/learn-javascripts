/* Practice -> Interview Preparation Kit -> Sorting -> Mark and Toys */

const prices = [3, 7, 2, 9, 4].sort((a, b) => a - b);
const budget = 15;
const toys = [];

const maxiumToys = (prices, budget) => {
  let num = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= budget) {
      budget -= prices[i];
      num++;
    }
  }
  console.log(num);
};

const result = maxiumToys(prices, budget);
