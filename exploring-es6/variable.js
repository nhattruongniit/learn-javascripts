const order = (x, y) => {
  if ( x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  console.log(tmp)
  return [x ,y]
}

console.log(order(3, 1))