const arrayA = [1, 2, 3, 4, 5];
const arrayB = [1, 2, 3, 4, 2];


function shadowEqualArray(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) return false;

  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) return false;
  }

  return true;
}

const result = shadowEqualArray(arrayA, arrayB);

console.log('compare arrayA vs arrayB: ', result)