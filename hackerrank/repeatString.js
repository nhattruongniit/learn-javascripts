/**
 * 
- Link refer: https://www.hackerrank.com/challenges/repeated-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

- Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

- Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

- For example, if the string s="abcac" and n=10, the substring we consider is abcacabcac, the first 10 characters of 
her infinite string. There are 4 occurrences of a in the substring.

*/

const str = "abba";
const n = 10;

const repeatString = (str, n) => {
  // const countA = str => str.split("").filter(char => char === "a").length;
  // const d = Math.floor(n / str.length);
  // const r = n - str.length * d;

  // console.log(str.substr(0, r));
  // return d * countA(str) + countA(str.substr(0, r));
  let i = 0;
  let max = 0;
  const quo = Math.floor(n / str.length);
  const rem = n % str.length;

  while (i < str.length) {
    if (str[i] === "a") max++;
    i++;
  }
  i = 0;
  max = max * quo;

  while (i < rem) {
    if (str[i] === "a") max++;
    i++;
  }

  return max;
};

const result = repeatString(str, n);

console.log("result: ", result);
