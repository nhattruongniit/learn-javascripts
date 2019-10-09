let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'bar', y: 13 };
let cloneObj = { ...obj1 };
let mergeObj = { ...obj1, ...obj2 };

console.log(cloneObj, mergeObj);