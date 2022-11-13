// flat: return a new array with all sub-array elements concatenated
const numbers = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(numbers.flat(2));

// flatmap: calls a defined callback function on each element of an array. Then, flattens the result into a new array
const flatNumbers = [1, 2, 3, 4, 5];
console.log(flatNumbers.flatMap(v => [v * 2]));
console.log(flatNumbers.flatMap(v => [v, v * 2]));
