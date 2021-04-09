 // global scope, function scope, block scope
var a = 1;

function test() {
  var ab = 1;

  if (true) {
    let block = '12';
    // console.log(block)
  }
  console.log(block)
}

test();