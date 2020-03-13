function rest(pattern, ...param) {
  return {pattern, param}
}

const result = rest(1, { 'a': 1, 'b': 2});

console.log('rest: ', result);