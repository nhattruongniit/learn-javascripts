
// Upper and Reverse for All firstname
// Output: ['OBOB', 'ECNERWAL', 'NONA']

const users = [{
  firstName: 'Bobo',
  lastName: 'Flakes'
}, {
  firstName: 'Lawrence',
  lastName: 'Shilling'
}, {
  firstName: 'Anon',
  lastName: 'User'
}];

// case write functional
const getFirstName = user => user.firstName;
const upperCaseString = string => string.toUpperCase();
const reverseString = string => string.split('').reverse().join('');

const upperCaseAndReverse = users => {
  const getName = getFirstName(users);
  const upperCaseName = upperCaseString(getName);
  const reverseName =  reverseString(upperCaseName);
  return reverseName;
}
const way1 = users => users.map(upperCaseAndReverse)
console.log('case write functional: ', way1(users));

// case write reduce
const way2 = users.reduce((acc, curr) => {
  return acc.concat(curr.firstName.toUpperCase().split('').reverse().join(''));
}, [])
console.log('case write reduce: ', way2);