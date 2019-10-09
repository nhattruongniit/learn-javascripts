/**
 * median:
 *  [1, 2] => 1.5
 *  [1, 2, 3] => 2
 *  [1, 2, 3, 4] =>  (2 + 3)/2 = 2.5
 */
const arr = [[5, 1, 9], [8, 4, 6, 7]];

const sorted = arr => arr.sort();

const median = arr => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  const mid = arr.length / 2; 
  if (arr.length % 2) {
    return arr[Math.floor(mid)];
  }
  return (arr[mid - 1] + arr[mid]) / 2;
}

const totalMedian = arr => {
  return arr.reduce((acc, cur) => {
    return acc += median(sorted(cur));
  }, 0)
};

const avg = (dividend, divisor) => parseFloat((dividend / divisor).toFixed(2));

const result = avg(totalMedian(arr), arr.length);

console.log(result);


var a;
a = [1, 2, 3];
for (var i=0; i<3; ++i) {
   setTimeout(function() {
    console.log(a[i]);
   }, 1000);
}