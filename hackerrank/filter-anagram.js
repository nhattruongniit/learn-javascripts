const names = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for(let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word)
  }
  return Array.from(map.values())
}

const res = aclean(names)
console.log('aclean: ', res)

const testabc = ['John', 'abc'];
let mapKey = new Map();
mapKey.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');


  console.log('mapKey: ', mapKey.values()) 

  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  

  console.log('recipeMap: ', recipeMap.keys()) 