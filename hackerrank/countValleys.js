/* Practice -> Interview Preparation Kit -> Warm-up -> Counting Valleys */

const str = "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD".split(
  ""
);
let step = 0;
let count = 0;

const countValleys = str => {
  str.forEach(value => {
    if (value === "U") {
      step += 1;
    } else if (value === "D") {
      step -= 1;
    }
    if (step === 0 && value === "U") {
      count += 1;
    }
  });

  return count;
};

const result = countValleys(str);

console.log("result: ", result);
