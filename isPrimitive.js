function isPrimitive(x) {
  let flag = true;

  if (x < 1) {
    flag = false;
  } else {
    for (let i = 2; i < x - 1; i++) {
      if (x % i === 0) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    return flag;
  } else {
    return flag;
  }

}
const result = isPrimitive(7);

console.log(result);
