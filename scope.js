// // const message = 'Hello from the global scope!';

// function sayHelloFromLocalScope() {
//     const greeting = 'Hello from functional/local scope';
//     return greeting;
// }

// // console.log(message); //Hello from the global scope!
// // console.log(greeting); //ReferenceError: greeting is not defined

// let outerVar = 1;

// function inner() {
//     let innerVar = 2;
//     console.log(outerVar);
// }

// // console.log(innerVar); //ReferenceError: innerVar is not defined

// //loops e if
// for (var i = 0; i <= 30; i++) {
//     console.log(`Iteration number: ${i}`)
// }

// console.log(`After the loop: ${i}`); //aqui eu consigo acessar

// for (let i = 0; i <= 30; i++) {
//     console.log(`Iteration number: ${i}`)
// }

// console.log(`After the loop: ${i}`); //aqui eu não consigo consifgo acessar

// // //var pode ser declarado novamente e atualizado
// // var message = 'Hello from the global scope!';
// // console.log(message);//Hello from the global scope!
// // var message = 'This is the second message.';
// // console.log(message); //This is the second message.

// // var name = 'José';

// // if (true) {
// //     var name = 'Ted';
// //     console.log(`Name inside if statement: ${name}`);
// // }

// // console.log(`Name outside if statement: ${name}`);

// //Eu não posso declarar uma variável let novamente, mas posso atualizar o valor dela

// //Isso funciona
// let message = 'This is the first message.';
// message = 'This is the second message.';

// //Isso não funciona
// let message = 'This is the first message.';
// let message = 'This is the second message.';

// //Ah não ser que elas estejam em escopos diferentes
// let name = 'Pedro';

// if (true) {
//     let name = 'João';
//     console.log(`Name inside if statement: ${name}`);
// }

// console.log(`Name outside if statement: ${name}`);

//quando eu uso const não posso declarar novamente e nem atualizar
// const message = 'This is the first message.';
// message = 'his is the second message.'; //TypeError: Assignment to constant variable.

// const message = 'This is the first message.';
// const message = 'This is the second message.'; // <== Duplicate declaration "message"

//const deve ser inicializada no momento da declaração
// const name = 'Jhon'; //Isso está correto

// const name; //Isso está incorreto
// name = 'Jhon';

// const obj = {}; // Está correto
// obj.name = 'Rafael';

// obj = {name: 'Ironhacker'} //Não está correto