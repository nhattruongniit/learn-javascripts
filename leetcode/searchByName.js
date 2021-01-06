const array = [
  {
    id: 0,
    name: 'truong'
  },
  {
    id: 1,
    name: 'khoa'
  },
  {
    id: 2,
    name: 'nam'
  },
  {
    id: 3,
    name: 'thu'
  }
]

function searchByName(keyword) {
  const newArray = array.filter(item => item.name.toLocaleLowerCase().indexOf(keyword) !== -1);

  return newArray;
}

const res = searchByName('t')

console.log('result: ', res)
