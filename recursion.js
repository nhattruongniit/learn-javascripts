let countDownFrom = (num) => {
  if (num == 0) return;
  console.log(num);
  countDownFrom(num - 1);
}

// countDownFrom(10);

let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' },
]

let makeTree = (categories, parent) => {
  let node = {};
  categories.filter(x => x.parent === parent)
    .forEach(x => node[x.id] = makeTree(categories, x.id))
  return node
}

console.log(JSON.stringify(makeTree(categories, null), null, 2));

// reserve string
const reverseString = (str) => {
  if (str.length <= 1) {
    return str;
  }
  return reverseString(str.substr(1)) + str[0];
}

const resultString = reverseString('bar');
console.log('reverseString: ', resultString);


// reserve array
const newArray = [];
const reverseArray = array => {
  // if (array.length === 0) {
  //   return array
  // }
  // return [array.pop()].concat(reverseArray(array))

  // way 2: swap
  for (let index = 0; index < array.length / 2; index++) {
    [array[index], array[array.length - index - 1]] = [array[array.length - index - 1], array[index]]
  }

  return array;

}

const resultArray = reverseArray(["h", "e", "l", "l", "o"]);
console.log('reverseArray: ', resultArray);