// allsettled: creates a promise that is resolved with an array of results when all of the provided promises resolve or reject
const promise1 = new Promise((resolve, reject) => reject('Reject'));
const promise2 = new Promise((resolve, reject) => resolve('Resolve'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve 2'));

Promise.allSettled([promise1, promise2, promise3]).then(response =>
  console.log(response),
);
