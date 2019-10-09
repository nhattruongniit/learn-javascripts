let a: string;
let b: number;
let c: boolean;
let d: any;
let e: string[] = ['a', 'b', 'c']; // number[], boolean[], any[]
let f: null;
let g: undefined;
let h: void;

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
};

let red = Color.Red;


// TypeAsserion
let aAss;

// Cast
// Cach 1: (<string[]>aAss)
// Cach 2: (aAss as string[])


// ================ Interface ==================================
interface IPoint {
  x: number;
  y: number;
};

let drawPoint = (point: IPoint) => {
  console.log(`Draw a point at X : ${point.x} and Y: ${point.y}`)
};

let movePoint = (point: IPoint) => {
  //
};

let getDistance = (pointA: IPoint, pointB: IPoint) => {
  //
};

// ==================== Cohesion: những cái nào liên quan vs nhau thì nên để chung vs nhau ================= 

// Access Modifies: Public, Private, Protected
class CPoint {
  // private x: number;
  // private y: number;

  constructor(private _x: number, private _y: number) {}

  drawPoint() {
    console.log(`Draw a point at X : ${this._x} and Y: ${this._y}`)
  };

  // Getters and Setters: properties
  get x() {
    return this._x;
  };

  set x(value: number) {
    if(value < 0) {
      throw new Error('Value cannot be less than 0');
    };
    this.x = value;
  }

}

let newPoint = new CPoint(1, 2); 
console.log(`X is ${newPoint.x}`);
newPoint.x = 5;
newPoint.drawPoint();


