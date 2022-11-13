// trailing commas: (sometimes called "final commas") can be useful when adding new elements, parameters, or properties code.
// if you want to add a new property, you can add a new line without modifying the previously last line if that line already uses a
// trailing comma. This makes version-control diffs cleaner and editing code might be less troublesome.
const ages = [1, 20, 27, 80,];

console.log(ages);
console.log(ages.length);

const user = {
  name: 'Tom',
  Mail: 'mail@mail.com',
  age: 42,
};

function print(p,) {
  console.log(p);
}
