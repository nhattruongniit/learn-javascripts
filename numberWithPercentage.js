// input: 43300.628903
// output: $43,300.63

export function numberWithPercentage(num) {
  if (num === undefined || num === null) return "0%";

  return Math.round(num * 100) / 100 + "%";
}
