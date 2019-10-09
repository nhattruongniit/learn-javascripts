// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

const x = {
  val: 2
};

const x1 = x => Object.assign({}, x, { val: x.val + 1 });

const x2 = x => Object.assign({}, x, { val: x.val * 2} );

console.log(x1(x2(x)));

//

const a = Object.freeze({
  foo: { greeting: 'Hello' },
  bar: 'world',
  baz: '!'
});

a.foo.greeting = 'Goodbye';

a.bar = 'Goodbye';

console.log(`${ a.foo.greeting }, ${ a.bar }${a.baz}`);

///

const double = n => n * 2; 
const doubleMap = numbers => numbers.map(double);

console.log('double map: ', doubleMap([2, 3, 4]));

// Exerise

const items = [
  { name: 'ball', points: 2 },
  { name: 'coin', points: 3 },
  { name: 'candy', points: 4}
];

const greaterThanThree = p => p.points >= 3;
const totalPoint = (acc, currValue) => acc + currValue.points;

const itemsFilter = items => items.filter(greaterThanThree);
const itemsReduce = items => items.reduce(totalPoint, 0);

console.log(itemsFilter(items));
console.log(itemsReduce(items));