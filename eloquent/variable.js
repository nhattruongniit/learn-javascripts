function checkAbc(value) {
  // if ... else
  // if (value < 18) {
  //   console.log('age < 18');
  //   return {
  //     age: 18
  //   };
  // } else if (value > 25 && value < 30) {
  //   console.log('age > 25 && age < 30')
  // } else if (value < 23) {
  //   console.log('age < 23')
  // } else {
  //   console.log('default')
  // }
  // console.log('continue execute')
  // return true;

  // switch ... case
  switch(value) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case  6:
      break;
    default: 
      console.log('default')
  }
}
const isCheck =  checkAbc(new Date().getDay())
console.log(isCheck)

// while ... loop
let iWhile = 0;
while (iWhile < 10) {
  console.log('while loop:', iWhile);
  iWhile++;
}
