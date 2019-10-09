/**
 * 
- Link refer: https://www.hackerrank.com/challenges/repeated-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

- Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

- Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

- For example, if the string s="abcac" and n=10, the substring we consider is abcacabcac, the first 10 characters of 
her infinite string. There are 4 occurrences of a in the substring.

*/

const string = 'abb';
const n = 10;

const repeatString = (string, n) => {
  const stringSplit = string.split('');
  const stringSize = stringSplit.length;
  const findLetterA = stringSplit.filter(val => val === 'a').length;
  const repeat = Math.floor(n/stringSize);
  const left = n - (repeat*stringSize);
  const filter = stringSplit.filter((a,i) =>a == 'a' && i < left);
  return (repeat*findLetterA) + filter.length;
}
const result = repeatString(string, n);

console.log('result: ', result)