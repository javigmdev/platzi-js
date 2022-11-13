const user = { username: 'javigmdev', age: 28, country: 'SP' };
const { username, ...values } = user;
console.log(username);
console.log(values);
