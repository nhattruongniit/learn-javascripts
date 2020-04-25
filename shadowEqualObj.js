const objA = {
  name: 'truong',
  age: 18,
  address: {
    address1: 'dang van ngu'
  }
}
const objB = {
  name: 'minh',
  age: 18
}


function shadowCompare(objA, objB) {
  const keysA = Object.keys(objA);
  // const keysB = Object.keys(objB);

  for (let i = 0; i < keysA.length; i++) {
    if (!objB.hasOwnProperty(keysA[i])) {
      return false;
    }
  }

  return true
}

const result = shadowCompare(objA, objB);

console.log('compare object: ', result)