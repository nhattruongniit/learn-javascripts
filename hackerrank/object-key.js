const objA = {
  name: 'truong',
  age: 18,
  person: {
    firstName: 'nguyen',
    lastName: 'ngoc'
  }
}

const res = Object.keys(objA).reduce((acc, curr) => {
  acc[curr] = objA[curr]
  return acc;
}, {})

console.log('res: ', res)