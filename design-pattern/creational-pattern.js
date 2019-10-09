console.log('########### Creational Pattern #################')

//  The three common ways to create new objets are as follow:
var newObject = {};
var newObject = Object.create(null);
var newObject = new Object();

// Có 4 cách để add key, value vào trong object

// 1: Dot syntax
newObject.ways1 = 'Ways 1';

// 2: Square bracket syntax
newObject['ways2'] = 'Ways 2';

// 3: ECMAScript 5
Object.defineProperty(newObject, "ways3", {
  value: "Ways 3",
  writable: true,
  enumerable: true,
  configurable: true
})

// 4: Object.defindProperties
Object.defineProperties(newObject, {
"ways4": {
  value: "Ways 4",
  writable: true
}
})
console.log(newObject);