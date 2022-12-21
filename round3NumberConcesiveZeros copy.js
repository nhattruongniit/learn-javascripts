// const input = [0.000006043709583, 0.03056432, 0.007054373, 0.001345767]
// output = [0.00000604, 0.0356, 0.00754]
const number = 0.000006043709583;

// how to map input to output
const res = input.map(num => {
  const [, strAfterDot] = num.toString().split('.');
  const str = strAfterDot.toString();
  const match0 = str.match(/0/g)
  const len = match0.length
  const str2 = str.slice(0, len + 3)
  const res = `0.${str2}` 

  const strToArray = strAfterDot.split('')

  console.log('strToArray', strToArray)
  return Number(res);
}
)
console.log(res)

