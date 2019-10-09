/* ============ FizzBuzz ========================
1/ Write a program that uses console.log to print all the numbers from 1 to 100,
2/ With two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
3/ When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
================================ */

const maxiumNum = 100;
for (let i = 1; i <= maxiumNum; i += 1) {
  let output = '';
  if ( i % 3 === 0) {
    output += 'Fizz';
  }
  if ( i % 5 === 0) {
    output += 'Buzz';
  } 
  console.log('FizBuzz', output || i);
}

/* ============ Looping triangle ============================ */
for (let line = "#"; line.length < 8; line += "#") {
  console.log('Looping triangle', line);
}


/* ============ chess board ============================ */
let size = 8;
let board = '';

for (let y = 0; y < size; y +=1) {
  for (let x = 0; x < size; x +=1) {
    if ((x+y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log('chess board  \n', board);

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count +=1) {
    result *= base;
  }
  return result;
}

console.log('power', power(2));