const objData = {
  businessLicenseNumber: '23',
  informationOfBusiness: {
    idNumber: {
      id: 22,
      issuanceDate: '2222-02-02',
      issuancePlace: '22',
      pictureIdNumber: '',
    },
    passport: {
      expiryDate: '2222-02-02',
      issuanceDate: '2222-02-02',
      issuancePlace: '222',
      passportNumber: 222,
      pictureOfBuyerHoldingPassport: '',
      picturePassport: '',
      address: {
        pictureAddress: ''
      }
    },
  },
  street: {
    id: 22,
    issuanceDate: '2222-02-02',
    issuancePlace: '22',
    pictureStreet: '',
  },
  proofOfTemporaryAddress: ''
}

const objFile = {
  pictureIdNumber: 'Screenshot from 2018-11-13 14-52-10.png',
  pictureOfBuyerHoldingPassport: 'Screenshot from 2019-01-11 13-19-08.png',
  picturePassport: 'Screenshot from 2019-01-10 14-40-47.png',
  proofOfTemporaryAddress: 'Screenshot from 2018-11-23 15.png',
  pictureAddress: 'content-js.pdf',
  pictureStreet: 'street.pdf',
}

const mergeObj = (objData, objFile) => {
  const normalize = (normalData, normalFile) => {
    const result = {};
    for (const key1 in normalData) {
      const val1 = normalData[key1];
      if (val1 && typeof val1 !== 'object') {
        result[key1] = val1;
      } else {
        const normalizeObj = normalize(val1, objFile);
        const val2 = normalizeObj[key1];
        if(normalizeObj !== undefined) {
          console.log(normalizeObj);
        }
      }
    }
    return result;
  }
  return normalize(objData, objFile);
};

const output = mergeObj(objData, objFile);

console.log('output: ', output);

// const mergeObj = (objData, objFile) => {
//   for(let i in objData) {
//     if(({}).hasOwnProperty.call(objFile, i)) {
//       objData[i] = objFile[i];
//     }
//     else {
//       for(let k in objData[i]){
//        if(({}).hasOwnProperty.call(objFile, k)){
//         objData[i][k] = objFile[k];
//        } 
//       }
//     }
//   }
//   return objData;
// }
// mergeObj(objData, objFile);

// console.log('result: ', objData);