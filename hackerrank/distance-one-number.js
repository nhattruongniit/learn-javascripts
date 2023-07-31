/*
11 -> 1
1001 -> 3
100100001001 -> 5
*/

function distanceOneNumber(number) {
  let startPosition = -1;
  let max = 0;

  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] === "1") {
      startPosition = 1;
    } else {
      startPosition++;
      if (startPosition > max) {
        max = startPosition;
      }
    }
  }
  return max;
}

const result = distanceOneNumber("100100001001");
console.log("distanceOneNumber: ", result);
