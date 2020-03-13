const map0 = new Map([[1, 2], [3, 4]]);

const map1 = new Map().map(value => {
  console.log(value);
});

const map2 = new Map([
  {
    1: 'a',
  },
  {
    2: 'ab',
  }
]);

// const map3 = new Map({
//   1: 'smile',
//   2: 'cry',
//   3: 'happy'
// }); // error
map1();
// console.log(map0)