// fromentries: return an object created by key-value entries for properties and methods
const entries = new Map([
  ['name', 'Jack'],
  ['age', 34],
]);
console.log(entries);
console.log(Object.fromEntries(entries));
