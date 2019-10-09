var x = 3;
function func(randomize) {
  if(randomize) {
    var x = Math.random();
    return x;
  }
  return x;
}
console.log('callFunc: ', func(false));


//
let loopArray = [];
for (var i of [1, 2, 3]) {
  loopArray.push(() => i);
}
console.log(loopArray.map(i => i()));
