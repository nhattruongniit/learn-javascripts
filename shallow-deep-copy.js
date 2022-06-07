const array = [
  {
    id: 1,
    text: 'react'
  },
  {
    id: 2,
    text: 'angular'
  }
]

const newArray = JSON.parse(JSON.stringify(array))
newArray[0].text = 'abc'

console.log('array: ', array)

console.log('newArray: ', newArray)