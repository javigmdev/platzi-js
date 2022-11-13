function sum(num1, num2) {
  return num1 + num2;
}

function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calculate(2, 2, sum));

setTimeout(function () {
  console.log('Hello JS');
}, 2000);

function grettin(name) {
  console.log(`Hello ${name}`);
}

setTimeout(grettin, 2000, 'William');
