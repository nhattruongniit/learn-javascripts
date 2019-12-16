/* Practice -> Interview Preparation Kit -> Warm-up -> Repeat String */

const str = "abb";
const n = 10;

const repeatString = (str, n) => {
  const countA = string => string.split("").filter(item => item === "a").length;
  const defaultA = countA(str);
  const repeat = Math.floor(n / str.length);
  const rem = n % str.length;

  const result = defaultA * repeat + countA(str.substr(0, rem));

  return result;
};

const result = repeatString(str, n);

console.log("result: ", result);
