/* 
  When you reference a property on an object, if that property doesn't exist, JavaScript will
  automatically use that object's internal prototype reference to find another object to look for
  the property on. You could think of this almost as a fallback if the property is missing.
*/
// Object.create(...)

var foo = {
  a: 42
};

// create `bar` and link it to `foo`
var bar = Object.create(foo);
bar.b = "Hello word"

console.log(bar.a, bar.b);

var abc = {
  index: 1
};

console.log(abc);
abc.index++;
