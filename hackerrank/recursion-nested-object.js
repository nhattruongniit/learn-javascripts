const MyCustomWidget = '1';

const input = {
  idNumber: {
    add: '1',
    properties: {
      id: '1',
      pictureIdNumber: {
        title: 'pictureIdNumber',
        format: 'file'        
      },
    }
  },
  passport: {
    add: '2',
    properties: {
      id: '1',
      picturePassport: {
        title: 'picturePassport',
        format: 'file'        
      },
      pictureNumber: {
        title: 'picturePassport',
        format: 'file'        
      }
    }
  },
  pictureAddress: {
    title: 'pictureAddress',
    format: 'file'        
  }
}

const output = {
  idNumber: {
    pictureIdNumber: {
      title: 'pictureIdNumber',
      format: 'file',
      'ui:widget': MyCustomWidget,        
    },
  },
  passport: {
    picturePassport: {
      'ui:widget': MyCustomWidget,                
    },
    pictureNumber: {
      'ui:widget': MyCustomWidget,                
    }
  },
  pictureAddress: {
    'ui:widget': MyCustomWidget,      
  }
}


const filterNestedObj = source => {
  const normalize = (obj) => {
    let result = {};
    for (const key in obj) {
      const value = obj[key];
      if(value.format === 'file') {
        result[key] = {
          ...value,
          'ui:widget': MyCustomWidget,
        }
      } else {
        if(value.properties && typeof value.properties === 'object') {
          const normalizeObj = normalize(value.properties);
          result[key] = normalizeObj;
        }
      }
    }
    return result;
  }
  return normalize(source);
}

const result = filterNestedObj(input);

console.log('result is: ', result);


// code Mr Hung
// const extract = (source) => {
//   const invalid = {};

//   const normalize = (obj) => {
//     if (obj.format === 'file') return obj;
//     let valid = false;
//     const result = {};
//     for(const key in obj) {
//       const value = obj[key];
//       if (value && value.constructor === Object) {
//         const normalizeObj = normalize(value);
//         if(normalizeObj !== undefined) {
//           valid = true;
//           result[key] = normalizeObj;
//         }
//       } else {
//         result[key] = value;
//       }
//     };
//     return valid ? result : invalid;
//   }

//   return normalize(source);
// }

// const output = extract(input);

// console.log('output: ', output);