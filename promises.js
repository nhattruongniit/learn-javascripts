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
