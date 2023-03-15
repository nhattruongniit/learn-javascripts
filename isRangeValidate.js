const ratio = 800 / 600;
const minRatio = 1.3333333333333333;
const maxRatio = Number.MAX_SAFE_INTEGER;

const minDimension = 200;
const maxDimension = Number.MAX_SAFE_INTEGER;

const inRange = (number, start, end) => {
  return number >= start && number <= end;
};

const res = inRange(ratio, 1.33, 1.34);

console.log("res: ", res);
