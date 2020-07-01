function solution(num) {
  return getData(num)
    .then((objects) => {
      return [objects.first];
    })
    .then((res) => {
      return res;
    });
}
// DO NOT TOUCH BELOW CODE
function getData(num) {
  return Promise.resolve({
    first: 80 * num,
    second: 30 * num,
  });
}

solution(2).then((result) => console.log("result", result));
