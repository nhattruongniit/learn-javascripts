var bar = "global";

function foo() {
  console.log(this.bar);
}

var obj1 = {
  bar: "obj1",
  foo: foo
};

var obj2 = {
  bar: "obj2"
};

foo();
obj1.foo();
foo.call(obj2);
new foo();
