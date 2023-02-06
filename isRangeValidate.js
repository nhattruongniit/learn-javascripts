const inRange = (number, start, end) => {
  return number >= start && number <= end;
};

const res = inRange(1200, 0, 9007199254740991);

console.log("res: ", res);
