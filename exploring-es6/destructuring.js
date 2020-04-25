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