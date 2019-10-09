// video: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344040?start=15#overview

// write a function that calculates the sum of all numbers from one up to.

function addUpToFirst(n) {
  let total = 0;
  for (let i = 1; i < n; i += 1) {
    total += i;
  }
  return total;
}

function addUpToSecond(n) {
  return (n * (n + 1)) / 2;
}

console.log(performance.now());
