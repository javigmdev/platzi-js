//async function: is a function declared with the async keyword, and the await keyword is permitted within it.
// The async and await keywords enable asynchronous, promise - based behavior to be written in a cleaner style, avoiding the need to
// explicitly configure promise chains.
const asyncFunction = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('resolved'), 2000)
      : reject(new Error('error'));
  });
};

const anotherFunction = async () => {
  const something = await asyncFunction();
  console.log(something);
  console.log('Hello');
};

console.log('Before');
anotherFunction();
console.log('After');
