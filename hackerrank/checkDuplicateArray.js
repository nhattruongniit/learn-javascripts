function checkDuplicateArray(...arr) {
  const arrFlat = [].concat.apply([], arr);
  return arrFlat.some(
    (idx) => arrFlat.indexOf(idx) !== arrFlat.lastIndexOf(idx)
  );
}

const result = checkDuplicateArray([1, 2], [3, 1]);

console.log("Result: ", result);
