const input = [0.00000604379583, 0.03056432, 0.007054373]
// output = [0.00000604, 0.0356, 0.00754]

// how to map input to output
const res = input.map(num => {
  const str = num.toString()
  const res = str.match(/0/g)
  const len = res.length
  const str2 = str.slice(0, len + 4)
  return str2
}
)
console.log(res)

