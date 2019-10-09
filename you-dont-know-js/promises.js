function add(getX, getY, cb) {
  var x, y;

  getX(function(xVal) {
    x = xVal;
    if (y != undefined) {
      cb (x +y);
    }
  });

  getY(function(YVal) {
    y = yVal;
    if (x != undefined) {
      cb (x +y);
    }
  });
}

add(fetchX, fetchY, function(sum) {
  console.log(sum)
})