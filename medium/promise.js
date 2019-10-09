// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

const wait = time => new Promise(resolve => setTimeout(resolve, time));

wait(500)
  // onFulfilled() can return a new promise, `x`
  .then(() => new Promise(res => res('foo')))
  .then(a => a)
  // Above we returned the unwrapped value of `x`
  // so `.then()` above returns a fulfilled promise
  // with that value:
  .then(b => console.log(b))
  .then(() => null)
  .then(c => console.log(c))
  .then(() => new Error('foo') )
  .then(
    d => console.log(`d: ${d}, `),
    e => console.log(e)
  )

const promiseAction = new Promise((resolve, reject) => {
  const add = (a, b) => a + b;

  resolve(add(2,3));
});

promiseAction.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
