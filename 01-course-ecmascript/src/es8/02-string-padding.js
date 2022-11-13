// padstart: pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
// padend:   pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length

const code = '10';

console.log(code.padStart(7, '0'));
console.log(code.padEnd(7, '0'));
