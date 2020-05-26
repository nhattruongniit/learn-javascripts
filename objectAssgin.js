const obj1 = {

}
obj1['davd'] = {
  comment: [1, 2, 3],
  total: 10
}
const obj2 = {

}

const mergeObj = { ...obj1, ...obj2 }
console.log(mergeObj)