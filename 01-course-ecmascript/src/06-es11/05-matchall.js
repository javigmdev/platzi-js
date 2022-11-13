// matchall: matches a string with a regular expression, and returns an iterable of matches containing the results of that search.
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, etc';

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
