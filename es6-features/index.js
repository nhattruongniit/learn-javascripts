console.log(1);
// new Promise((resovle, reject) => {
//   console.log(2)
//   resovle(2);
// })
let aa = new Promise((resovle, reject) => {
 resovle(2)
})
aa.then(res => console.log(res))
console.log(3);
// let a = 0;
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  },1000)
}


function foo() {
  var x = 10;
  if (true) {
     let x = 20; // x này là x khác rồi đấy
  }
  console.log(x); // in ra 10
}
