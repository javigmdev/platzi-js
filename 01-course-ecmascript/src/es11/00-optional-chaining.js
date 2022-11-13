// optional chaining operator: accesses an object's property or calls a function. If the object is undefined or null,
// it returns undefined instead of throwing an error.
const users = {
  user: {
    country: 'Mexico',
  },
  user2: {
    country: 'UK',
  },
};

console.log(users?.bebeloper?.country);
