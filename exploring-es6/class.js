class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `this is class Point: ${this.x} - ${this.y}`
  }
}


class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  toString() {
    return `this is class ColorPoint: ${super.toString()} - ${this.color}`
  }
}

const point = new Point(1, 2);

const result = point.toString();


const color = new ColorPoint(25, 23, 'red');

const resultColor = color.toString();

console.log(resultColor)