// format object: [key]: value
// const obj = {
//   'name': null,
//   1: [1,2,3]
// }

// create object
const way1 = {
  name: 'truomg',
  age: 20
}
const way2 = new Object({
  name: 'truomg',
  age: 20
})
const way3 = {};
way3.name = 'truong'

// accessing object
const accessObj = {
  name: 'truong',
  age: 18
}
// way1
console.log('way1 access object:', accessObj.name)
// way2
console.log('way2 access object:', accessObj["name"])
// way3
const x = accessObj.name;
console.log('way2 access object:', accessObj[x])

// loop object: for ... in
for (let key in accessObj) {
  console.log('loop object:', key, accessObj[key])
}

// combine object
const objectA = { a: 1, b: 2 }
const objectB = { c: 3, d: 2 };
// way1
const newObject1 = Object.assign(objectA, objectB, { e: 5} );
console.log('way1 combine object: ', newObject1);
// way2: es6+ rest
const newObject2 = {
  ...objectA,
  ...objectB,
  t: 20,
  e: 5
}
console.log('way2 combine object: ', newObject2);

// delete object
const deleteObject = {
  name: 'truong',
  truong: '134'
}

delete deleteObject.name;

console.log('delete object: ', deleteObject)

// method object

// 1: Object.assign()
// 2: Object.keys()
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.keys(object1));
// 3: Object.values()
console.log(Object.values(object1));
// 4: Object.entries()
console.log(Object.entries(object1));


const salaries = {
  tri: 200,
  truong: 300,
  minh: 1000
}
let sum  = 0;
for(const key in salaries) {
  sum += salaries[key]
}

console.log(sum)
