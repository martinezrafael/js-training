//Exercício com filter (Drinking age) - Filtrar as pessoas que podem frequentar bares de acordo com a idade

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

const ofDrinkingAge = people.filter((people) => {
  if (people.age >= 21) {
    return people;
  }
});

// console.log(ofDrinkingAge);

//Exercicio filter (Swimming pool) - Filtrar apenas as casas que possuem piscina

const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: "Private Room",
    pool: true,
    garage: false,
  },
  {
    title: "Private apartment",
    price: 190,
    type: "Entire Place",
    pool: true,
    garage: true,
  },
  {
    title: "Apartment with awesome views",
    price: 400,
    type: "Entire Place",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment in la Rambla",
    price: 150,
    type: "Private Room",
    pool: false,
    garage: true,
  },
  {
    title: "Comfortable place in Barcelona´s center",
    price: 390,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "Room near Sagrada Familia",
    price: 170,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Great house next to Camp Nou",
    price: 140,
    type: "Entire place",
    pool: true,
    garage: true,
  },
  {
    title: "New apartment with 2 beds",
    price: 2000,
    type: "Entire place",
    pool: false,
    garage: true,
  },
  {
    title: "Awesome Suite",
    price: 230,
    type: "Private Room",
    pool: false,
    garage: false,
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: "Entire place",
    pool: true,
    garage: true,
  },
];

const ofPool = places.filter((place) => {
  if (place.pool) {
    return place;
  }
});

// console.log(ofPool);

//Exercício filter (odd numbers) - Filtrar os números impares que são maiores de 42

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

const result = numbers.filter((number) => {
  if (number % 2 !== 0 && number > 42) {
    return number;
  }
});

// console.log(result);

const arr = [1, 2, 3];

//ES5
// const newArray = arr.map(function (number) {
//     return number * 2;
// });

//ES6
const newArray = arr.map((number) => number * 2);

// console.log(newArray);

//solução semelhante usando forEach

const nArray = [];

arr.forEach(function (numCopy) {
  numCopy *= 2;
  nArray.push(numCopy);
});

// console.log(nArray);

//Exercicio (foods) utilizando map
const foods = ["Pizza", "Sandwiches", "ice cream"];

// ES5
// const capsFoods = foods.map( function (food) {
//     return food.toUpperCase();
// } );

// ES6
const capsFoods = foods.map((food) => food.toUpperCase());

// console.log(capsFoods);

//Exercício (cities) - retornar um array com a primeira letra do nome de cada cidade;

// array of cities:
const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

const letters = cities.map((citie) => citie.slice(0, 1));

// console.log(letters);

//Exercicio (avaliação estudantes) - usando map

const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90,
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65,
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99,
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70,
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85,
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78,
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90,
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75,
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67,
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65,
  },
];

const finalGrades = students.map((theStudent) => {
  const projectsAvg = (theStudent.firstProject + theStudent.secondProject) / 2;
  const finalGrade = theStudent.finalExam * 0.6 + projectsAvg * 0.4;

  return {
    name: theStudent.name,
    finalGrade: Math.round(finalGrade),
  };
});

// console.log(finalGrades);

//Exemplo de soma usando reduce

const numeros = [2, 4, 6, 8];

// const total = numeros.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator is ${accumulator} and current value is ${currentValue}.`);
//     return accumulator + currentValue;
// });

// console.log(`Total is ${total}`);

//Exemplo de soma com reduce, usando um initial value

// const newTotal = numeros.reduce((acc, current) => {
//     console.log(`accumulator is ${acc} and current value is ${current}.`);
//     return acc + current;
// },23);

// console.log(newTotal);

//Exemplo (product) usando reduce

const arrNumbers = [2, 4, 6, 8];

const multiply = arrNumbers.reduce((acc, current) => acc * current);

// console.log(multiply);

//concat

const words = ["This", "is", "one", "big", "string"];

//ES5
// const bigString = words.reduce(function (sum, word) {
//     return sum + word;
// });

// ES6
const bigString = words.reduce((sum, word) => sum + word);

// console.log(bigString);

//usando reduce em objetos
const peopleAges = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
];

const ages = peopleAges.reduce(function(initial, person) {
    return initial + person.age;
}, 0);

// console.log(ages);
