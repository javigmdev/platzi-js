// promise: represent the eventual completion (or failure) of an asynchronous operation and its resulting value
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    let isSuccess = true;
    let isReject = false;
    if (isSuccess) resolve('Success!');

    if (isReject) reject('Error!');
  });
};

anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error));
