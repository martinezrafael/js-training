// hoisting

// console.log(message); //isso me retorna undefined
// var message = 'Hello from the global scope!';

// console.log(message); //isso me retorna um erro
// let message = 'Hello from the global scope!';

// shadowing

// let a = 1;
// let b = 2;

// function inner() {
//     a = 4;
//     let b = 3;
// }

// inner();
// console.log(a); //4
// console.log(b); //2