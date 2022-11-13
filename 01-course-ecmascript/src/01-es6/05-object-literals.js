// object literal: is one of the widely used patterns to create objects in javascript.
//                 consist of a list of key-value pairs, each separated by a comma and wrapped inside curly braces
function newUser(user, age, country, id) {
  return {
    user: user,
    age: age,
    country: country,
    id: id,
  };
}

console.log(newUser('javigmdev', 28, 'Spain', 1));
