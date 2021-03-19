console.log("====== start promise loadNumber=========");

function loadNumber(number) {
  return new Promise((resolve, reject) => {
    // if (isNaN(number)) {
    //   let message = number + " is not number";
    //   reject(new Error(message));
    // } else {
    //   resolve(1);
    // }
    console.log("success loadNumber: ", number);
  });
}

Promise.all([loadNumber(1), loadNumber(2), loadNumber("abc")])
  .then((res) => {
    console.log("res123 : ", res);
  })
  .catch((err) => {
    console.log("error 123", err);
  });

console.log("======end promise loadNumber=========");
/*===================*/

console.log(new Promise((resovle, reject) => {}));


// create 1 promise
const loadApi = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle(2);
  }, 2000)
})

// how get data from an promise
// way 1
loadApi.then((value) => {
  console.log('promise: ', value)
}).catch(err => {
  console.log('reject: ', err)
})
// way 2: async/await
const loadApi2 = () => {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      reject(2);
    }, 2000)
  })
}
const asyncAwait = async () => {
  try {
    const res = await loadApi2();
    console.log('async await success: ', res)
  } catch(err) {
    console.log('async await error: ', err)
  }
  
}

asyncAwait();