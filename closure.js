const number = 1; // global variable

function getNumberA() {
  const numberA = 2; // local variable
  console.log('getNumberA: ', number)
}


function getNumberB() {
  console.log('getNumberB: ', number, numberA)
}

getNumberA();
getNumberB();