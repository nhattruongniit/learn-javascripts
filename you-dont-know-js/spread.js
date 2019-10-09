function foo(...args) {
  args.shift();
  console.log(...args);
}

foo(1, 2, 3, 4, 5);
