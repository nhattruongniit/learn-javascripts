const obj1 = { a: 1 };
const obj2 = {};
const number = 1;

console.log("equality string: ", obj1.toString());

console.log("equality valueOf: ", obj1.valueOf());
console.log("equality: ", obj1.valueOf() == obj1);

console.log("Object is: ", Object.is(obj1, obj1));
