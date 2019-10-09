let countDownFrom = (num) => {
  if(num == 0) return;
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

const reverseString = (str) => {
  if(str.length <= 1) {
    return str;
  }
  return reverseString(str.substr(1)) + str[0];
}

const resultString = reverseString('bar');
console.log('reverseString: ', resultString);