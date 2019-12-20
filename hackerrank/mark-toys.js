/* Practice -> Interview Preparation Kit -> Sorting -> Mark and Toys */

const prices = [5, 15, 3, 7, 2, 9, 4].sort((a, b) => a - b);
const budget = 10;
let maximum = 0;

const markToys = (prices, budget) => {
  for (const price of prices) {
    if (price <= budget) {
      budget -= price;
      maximum++;
    }
  }
  return maximum;
};

const result = markToys(prices, budget);

console.log("The maximize the number of toys: ", result);
