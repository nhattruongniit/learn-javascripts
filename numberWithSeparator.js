// input: 20301093
// output: 20 301 093

export function numberWithSeparator(x, separator = " ") {
  if (x === undefined || x === null) return x;

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
