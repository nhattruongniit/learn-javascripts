// array like object
const array1 = [
  {
    id: 1,
    name: 'javascript',
    status: false  // -> true
  },
  {
    id: 2,
    name: 'react',
    status: false
  },
  {
    id: 3,
    name: 'css',
    status: false
  }
]

// forEach, for loop
// array1.forEach(task => {
//   if(!task.status) task.status = true
// })
// console.log(array1)

// map
const newArray = array1.map(task => {
  if(task.status) {
    return 'aaa'
  };
  return {
    age: 18
  };
})

console.log(newArray)

// sort
const arraySort = [5,6,1,100,200,100,300]
arraySort.sort((a, b) => b - a);
console.log('sort', arraySort)

// some
// return boolean (true | false)
const arraySome = [5,6,1,100,200,100,300]
const newSome = arraySome.some(number => number < 200)
console.log('some', newSome)

// every
// return boolean (true | false)
const arrayEvery = [5,6,1,100,200,100,300]
const newEvery = arrayEvery.every(number => number < 200)
console.log('every', newEvery)

// find
const arrayFind = [
  {
    id: 1,
    name: 'javascript',
    status: false  // -> true
  },
  {
    id: 2,
    name: 'react',
    status: true
  },
  {
    id: 3,
    name: 'css',
    status: false
  }
]

const newFind = arrayFind.find(item => !item.status);
console.log('array find: ', newFind)