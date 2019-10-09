const array = [
  {
    name: 'truong',

    status: true
  },
  {
    name: 'minh',
    status: false
  },
  {
    name: 'ngoc',
    status: true
  },
  {
    name: 'thao',
    status: true
  }
]

const filterFunc = (name, status) => {
  result = array.filter(value => value.name == name && value.status);
  console.log(result);
}

filterFunc('truong', true)