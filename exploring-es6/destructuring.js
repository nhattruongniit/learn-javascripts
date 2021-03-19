const todos = [
  {
    id: 1,
    title: 'start'
  },
  {
    id: 2,
    title: 'end'
  }
]

const newTodos = { ...todos };

console.log(newTodos)


// array destructuring
const array = [1,2,3,4,5];
const arr1 = array[0];
const arr2 = array[1];
const [arr1Des] = array;

console.log(arr1Des)

const obj = { first: 'Jane', last: 'Doe' };
// const newFirst = obj.first;
// const newLast = obj.last;
const {first: newFirst, last: newLast} = obj;

console.log(newFirst, newLast)


// for ... of
const arr = ['a', 'b'];
for (const [index, value] of arr.entries()) {
    console.log('for...of', index, value);
}