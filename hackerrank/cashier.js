/*
Give 3 denominate: 10, 5, 2.
Write program allow cashier cash the denominates smallest.

E.g: 
change(10).ten // 4
change(10).five // 0
change(10).two // 1

*/
const money = 45;
const change = cash => {
  const bills = [10, 5, 2];
  const result = [];
  let remainCash = cash;

  bills.forEach(bill => {
    const amount = Math.floor(remainCash / bill);
    remainCash = remainCash % bill;
    result.push(amount);
  });
  return {
    ten: result[0],
    five: result[1],
    two: result[2]
  };
};

const result = change(money);

console.log("customer's money is : ", money);
console.log("result: ", result);
