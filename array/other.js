/* TODO: CONCAT ARRAY =========================== */
let zero = 0;
let positiveNumber = [1, 2, 3];
let negativeNumber = [-3, -2, -1];
let concat = negativeNumber.concat(zero, positiveNumber);

console.log('TODO: CONCAT ARRAY: ', concat);


/* TODO: ITERATOR FUNCTION ===================== */
const isEven = (x) => {
  return (x % 2 == 0)
}
const iteratorNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// iteratorNumber.forEach(x => { 
//   if (x % 2 == 0) console.log('====== tim cac so chia het cho 2 ============: ', x);
// })

iteratorNumber.filter(x => { 
  if (x % 2 == 0) console.log('====== tim cac so chia het cho 2 ============: ', x);
})