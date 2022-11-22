const input = [
  {
    name: 'truong',
    age: 18,
    gender: 'male'
  },
  {
    name: 'tuyen',
    age: 18,
    gender: 'female'
  }
]

const output = input.map(item => ({
  ...item,
  key: Math.floor(Math.random() * 1000)
}))



/*
output = [
  {
    name: 'truong',
    age: 18,
    gender: 'male',
    key: '123'
  },
  {
    name: 'tuyen',
    age: 18,
    gender: 'female',
    key: '4524124'
  }
]


*/