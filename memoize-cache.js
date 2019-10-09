const memoizeAdd = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('load from caching:', cache[n]);
            return cache[n];
        }
        let result = fn(n);
        cache[n] = result;
        return result;
    }
}

const factorial = memoizeAdd(
    (n) => {
        if (n === 0) return 1;
        return n * factorial(n - 1);
    }
)

console.log(factorial(2));
console.log(factorial(3));
