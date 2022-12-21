// const input = [0.000006043709583, 0.03056432, 0.007054373, 0.001345767]
// output = [0.00000604, 0.0305, 0.00754]
const num = 0.001345767;

// how to map input to output
const [, strAfterDot] = num.toString().split('.');
const strToArray = strAfterDot.split('')
let count0 = 0;
for (const digit of strToArray) {
  if (digit === '0') {
    count0++
  } else {
    break
  }
}
const consecutiveZeros = Array.from(Array(count0).keys()).map(() => 0).join('');
const newThreeNumber = strToArray.slice(count0, count0 + 3).join('');
const res = `0.${consecutiveZeros}${newThreeNumber}` 

console.log('res: ', Number(res).toFixed(consecutiveZeros.length + newThreeNumber.length))