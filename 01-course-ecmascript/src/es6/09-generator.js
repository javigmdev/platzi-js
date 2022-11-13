//generator: process that can be paused and resumed and can yield multiple values.
//           in javascript consists of a generator function, which returns an iterable generator object
function* generatorFunc() {
  console.log('1. code before first yield');
  yield 100;

  console.log('2. code before the second yield');
  yield 200;

  console.log('3. code after the second yield');
}

const generator = generatorFunc();

generator.next();
generator.next();
generator.next();
