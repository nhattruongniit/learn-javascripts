const types = ['public', 'private', 'installed'];
// const types = [];

// output: `/add-on?types=public&types=private&types="installed"

// way 1
const arrayToApi = types => {
  let api = '/add-on';
  if (types.length > 0) {
    const concat = types.map(item => {
      return ['types', item].map(encodeURIComponent).join('=');
    }).join("&");
    return `${api}?${concat}`;
  }

  return api;
}

const result1 = arrayToApi(types);

console.log('api way 1: ', result1);



// way 2
// const arrayToApi2 = types => {
//   let api = '/add-on';
//   if (types.length > 0) {
//     return axios.get('/add-on', {
//       params: {
//         ...params
//       },
//       paramSerializer: queryString => queryString.stringify(params, { arrayFormat: 'repeat' })
//     })
//   }

//   return api;
// }

// const result2 = arrayToApi2(types);

// console.log('api way 2: ', result2);








// const arrays = ['public', 'private', 'installed'];


// const expect = axios.get('/add-on', {
//   params: {
//     types
//   }
// })

// output: `/add-on?types=public&types=private&types="installed"