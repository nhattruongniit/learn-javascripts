/*  Practice -> Interview Preparation Kit -> Warm-up Challenges -> Sock Merchant */

const n = 9;
const ar = "10 20 20 10 10 30 50 10 20";

const sockMerchant = (n, ar) => {
  const splitArr = ar.split(" ");
  let totalParis = 0;
  const cal = splitArr.reduce((acc, curr) => {
    console.log(acc, curr)
    if (!acc[curr]) {
      acc[curr] = 1;
      return acc;
    }
    acc[curr] += 1;
    return acc;
  }, {});
  for (const item in cal) {
    totalParis += Math.floor(cal[item] / 2);
  }
  return totalParis;
};

const result = sockMerchant(n, ar);

console.log("The number of pairs is: ", result);
