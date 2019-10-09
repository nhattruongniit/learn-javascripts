/**
output = {
  id: 1,
  date: '2019',
  place: 'VN',
  number: 2,
  expired: '2020',
  pass1: '234',
  pass2: '345',
  port1: '1234',
  port2: '6789',
  address: 'TPHCM'
}

*/

const obj = {
  idNumber : {
    id: 1,
    date: '2019',
    place: 'VN'
  },
  passport: {
    number: 2,
    expired: '2020',
    pass: {
      pass1: '234',
      pass2: '345',
      port: {
        port1: '1234',
        port2: '6789',
        born: {
          born1: '234a',
          born2: '231',
        }
      }
    }
  },
  address: 'TPHCM'
};

const newObj = {};
const convertObj =  input => {
  Object.keys(input).map(key => {
    if(typeof input[key] !== 'object') {
      newObj[key] = input[key]
    } else {
      convertObj(input[key]);
    }
  })
  return newObj;
}

const output = convertObj(obj);
console.log(output);
