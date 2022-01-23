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
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];
  
const ofPool = places.filter ( place => {
    if (place.pool) {
        return place;
    }
});

// console.log(ofPool);

//Exercício filter (odd numbers) - Filtrar os números impares que são maiores de 42

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

const result = numbers.filter (number => {
    if (number % 2 !== 0 && number > 42) {
        return number;
    }
})

// console.log(result);

