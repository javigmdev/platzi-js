// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring
let user = { username: 'Tom', age: 34 };
let { username, age } = user;
console.log(username, user.age);

// spread operator: allows us to quickly copy all or part of an existing array or object into another array or object
let person = { name: 'Will', age: 28 };
let country = 'USA';

let data = { id: 1, ...person, country };
console.log(data);

// rest operator: is used to put the rest of some specific user-supplied values into a array
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);
