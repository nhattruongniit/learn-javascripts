const memoize = (f) => {
  const cache = {};

  return (...args) => {
    const argStr = JSON.stringify(args);
    cache[args] = cache[args] || f(...cache.args);
    return cache[argStr];
  }
}

const result = memoize((url, params) => () => console.log(params));

console.log('result memoize: ', result);