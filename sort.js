//sort

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ES5
// numbers.sort(function(a, b){
//     return a - b;
// });

// ES6
numbers.sort((a, b) => a - b);

// console.log(numbers);

//organizando strings
const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

// words.sort();
words.sort().reverse();

// console.log(words);

//reverse - Exemplo
const arrOne = ['one', 'two', 'three'];
const arrTwo = arrOne.reverse();

console.log(arrOne);
console.log(arrTwo);