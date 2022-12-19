const input = [0.0000064379583, 0.0356432, 0.00754373]
// output = [0.00000643, 0.0356, 0.00754]

const res = input.map(num => {
  const str = num.toString()
  const index = str.indexOf('.')
  if (index === -1) return num
  const strAfterDot = str.slice(index + 1)
  // get the last consecutive zeros
  const lastNumber = strAfterDot.match(/[^0]/g).slice(0, 3).join('');
  const consecutiveZeros = strAfterDot.match(/[0]/g).join('');
  const res = `0.${consecutiveZeros}${lastNumber}`
  return Number(res)
})
console.log(res)



