// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

const input = [10,2,5,3]

function doubleExist(arr) {
  for(let i = 0; i < arr.length; i++) {
    const currentValue = arr[i]
    for(let j = 0; j < arr.length; j++) {
      const posibleValue = arr[j]
      if(posibleValue === 2 * currentValue && i !== j) {
        return true
      }
    }
  }
  return false
}

// hastable
function doubleExist_2(arr) {
  const hashtable = {};
  for(let i = 0; i < arr.length; i++) {
    const currVal = arr[i];
    if(hashtable[currVal] !== undefined) {
      return true
    }
    hashtable[currVal / 2] = true
    hashtable[currVal * 2] = true
  }
  return false;
}

// Set
function doubleExist_3(arr) {
  const set = new Set();
  for(let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    if(set.has(currentValue)) return true;
    set.add(currentValue * 2);
    set.add(currentValue / 2)
  }
}

const res = doubleExist_3(input)
console.log(res)

// console.log(0 !== 0)