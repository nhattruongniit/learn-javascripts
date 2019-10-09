// array reduce: https://medium.freecodecamp.org/reduce-f47a7da511a9

// var numbers = [1, 2, 3, 4];
// var result = numbers.reduce(function(a, b) {
//   console.log(a, b);
//   return a + b;
// })
// console.log(result);

// var orders = [
//   { name: 'A', quanlity: 2, unitPrice: 100 },
//   { name: 'B', quanlity: 1, unitPrice: 400 },
//   { name: 'C', quanlity: 4, unitPrice: 15 }
// ]
// var totalOrder = orders.reduce(function(currentTotal, order) {
//   return currentTotal + order.quanlity * order.unitPrice
// }, 0)
// console.log(totalOrder);


// var items = ['Tom', 'Bill', 'Kim'];
// var result1 = items.map(function(item) {
//   return '<' + item + '>';
// }).reduce(function(current, text) {
//   return current + text
// })
// console.log(result1);

const arraySum = [1, 2, 3, 4, 5];
const sumTotal = arraySum.reduce((accum, total) => accum + total);
console.log('======tinh tong======', sumTotal);


const euros = [29.76, 41.85, 46.5];
const average =  euros.reduce((total, amount, index, array) => {
  total += amount;
  if(index == euros.length - 1) {
    return total / array.length
  } else {
    return total;
  }
})
console.log('reduce average: ', average);

const above30 = euros.reduce((total, amount) => {
  if(amount > 30) {
    total.push(amount);
  }
  return total;
}, [])
console.log('reduce above > 30: ', above30)


//Creating a Tally with the Reduce Method In JavaScript​
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'fig'];
const countFruit = fruitBasket.reduce((acc, curr) => {
  if(!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  // tally[fruit] = (tally[fruit] || 0) + 1;
  return acc;
}, {})
console.log('find count fruit duplicate: ', countFruit)


//Flattening an array of arrays with the Reduce Method In JavaScript​​
const flattenArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatt = flattenArray.reduce((total, amount) => {
  return total.concat(amount);
}, [])
console.log('Flattening an array: ', flatt);


// flatten color complicated
const colorArray = [
  { a: 'Happy', b: 'Robin', c: ['blue', 'green'] },
  { a: 'Tired', b: 'panther', c: ['blue', 'green', 'red', 'orange'] },
  { a: 'Sad', b: 'Fish', c: ['green', 'red'] },
]
const colors = colorArray.reduce((total, amount) => {
  amount.c.forEach(color => {
    if(total.indexOf(color) === -1) {
      total.push(color);
    }
  });
  return total
}, []);
console.log('Flattening color: ', colors);


