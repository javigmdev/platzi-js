// finally: schedule a function, the callback function, to be called when the promise is settled
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    const isResolve = true;
    const isReject = false;
    if (isResolve) resolve('Success!');
    if (isReject) reject('Error!');
  });
};

anotherFunction()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finally'));
