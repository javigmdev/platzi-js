//regular expressions: patterns used to match character combinations in strings
//   exec: return an array of information or null on a mismatch
//   test: test for a match in a string, it returns true or false
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);
const matchers1 = regex.exec('01-01-2022');
console.table(matchers1);
const matchers2 = regex.test('2022-01-01');
console.table(matchers2);
const matchers3 = regex.test('01-01-2022');
console.table(matchers3);
