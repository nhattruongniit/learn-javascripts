let PI = 0;
PI = Math.PI;
let r = 2.6;
let perimeter = 0;
let area = 0;

const calculate = r => {
  area = PI * Math.pow(r, 2);
  perimeter = 2 * PI * r;
  return {
    area,
    perimeter
  };
};

const result = calculate(r);

console.log("===area===", result);
