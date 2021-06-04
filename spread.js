// let obj1 = { foo: 'bar', x: 42 };
// let obj2 = { foo: 'bar', y: 13 };
// let cloneObj = { ...obj1 };
// let mergeObj = { ...obj1, ...obj2 };

// console.log(cloneObj, mergeObj);

const obj1 =  {
  id: 35,
  project_id: 2,
  simulations: 0
}

// console.log(...obj1)
const hiddenColumsSongParams = [
  {
    index: 4,
    key: 'diamonds'
  },
  {
    index: 5,
    key: 'tags'
  },
  {
    index: 6,
    key: 'abc'
  },
  {
    index: 7,
    key: 'tyr'
  }
]
const hideColumn = [4, 5]

const res = hiddenColumsSongParams.filter(ele => !hideColumn.includes(ele.index))

console.log(res);