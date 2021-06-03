const input =[0,3,4,5,6,7,8,7,6,5,4,3,1] //[0,1,2,1,2] //[9,8,7,6,5,4,3,2,1,0]// [3,5,5] //[1,3,2]

function mountain(arr) {
  const length = arr.length;
  if(length < 3) return false;

  let i = 0;

  for(; i < length - 1; i++) {
    if(arr[i] > arr[i+1]) {
      i++;
      break
    } else if(arr[i] === arr[i+1]) {
      return false; 
    }
  }
  if(i < 2) return false;
  for(; i < arr.length; i++) {
    if(arr[i-1] <= arr[i]) {
      return false;
    }
  }
  return true;
}

function mountain_2(arr) {
  let length = arr.length;
  let i = 0;

  while(i < length && i + 1 < length && arr[i] < arr[i +1]) {
    i++;
  }

  if(i === 0 || i + 1 >= length) return false;
  
  while(i < length && i + 1 < length) {
    if(arr[i] <= arr[i++ + 1]){
      return false
    }
  }
  return true;
}

const res = mountain(input);

console.log(res)