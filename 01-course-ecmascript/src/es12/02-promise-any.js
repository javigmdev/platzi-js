// any: method takes an iterable of promises as input and returns a single promise.
// This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value
const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('Resolve'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve 2'));

Promise.any([promise1, promise2, promise3]).then(response =>
  console.log(response),
);
