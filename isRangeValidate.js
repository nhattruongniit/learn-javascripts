const ratio = 1;
const minRatio = 1;
const maxRatio = Number.MAX_SAFE_INTEGER;

const minDimension = 200;
const maxDimension = Number.MAX_SAFE_INTEGER;

const inRange = (number, start, end) => {
  return number >= start && number <= end;
};

const res =
  inRange(ratio, minRatio, maxRatio) &&
  (inRange(1080, minDimension, maxDimension) ||
    inRange(1080, minDimension, maxDimension));

console.log("res: ", res);
