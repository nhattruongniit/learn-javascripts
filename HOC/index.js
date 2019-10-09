const isEven = (num) => num % 2;
const result = [1, 2, 3, 4].filter(isEven);

console.log({ result });

const input = {
  89: {
    name: 'An Giang',
    slug: 'an-giang',
    type: 'tinh',
    name_with_type: 'Tinh An Giang',
    code: '89'
  },
  74: {
    name: 'Binh Duong',
    slug: 'binh-duong',
    type: 'tinh',
    name_with_type: 'Tinh Binh Duong',
    code: '74'
  }
}

const output = [
  {
    name: 'An Giang',
    slug: 'an-giang',
    type: 'tinh',
    name_with_type: 'Tinh An Giang',
    code: '89'
  }
];

const newArray = [];
const convertToArray = obj => {
  for (const key in obj) {
    if (obj[key].code === key) {
      newArray.push(obj[key])
    }
  }
  return newArray;
}

const result1 = convertToArray(input);

console.log('result1: ', result1);