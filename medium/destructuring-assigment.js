// https://medium.com/@codingsam/awesome-javascript-destructuring-assignment-55fd2e9d3dc4

// Object destructuring
const person = {
  name: 'Coding Sam',
  age: 28,
  gender: 'M',
  address: 'I am not going to tell you xD',
  phone: '111111111'
}
const { name, age, ...rest } = person;
console.log('===============Object destructuring===============');
console.log(name, age);


// Minigame 2D
function getDistance(p1, p2) {
  const [ x1 = 0, y1 = 0] = p1;
  const [ x2 = 0, y2 = 0] = p2;

  return {
    x: x2 - x1,
    y: y2 - y1,
  }
}

const p1 = [2, 4];
const p2 = [5, 3];

const {x: xDistance, y: yDistance} = getDistance(p1, p2);

console.log('===============Minigame 2D===============');
console.log('POSITION (x, y) = ', xDistance, yDistance);