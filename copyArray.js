const arrayA = [1, 2, 3, 4, 25];
const arrayB = [];


function copyArray(arrayA) {

  for (let i = 0; i < arrayA.length; i++) {
    arrayB[i] = arrayA[i]
  }

  return arrayB

}

const result = copyArray(arrayA);

console.log('arrayB is : ', result)