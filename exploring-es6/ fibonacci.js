function fibonacci(numb) {
  if(numb <=1) return 1;

  return fibonacci(numb - 1) + fibonacci(numb - 2)
}

const res = fibonacci(6);

console.log(res)