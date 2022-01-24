//Example Board Game

// //Object Literals
const board = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
];

// //Players
// let player1 = {
//     name: 'Erico',
//     color: 'white',
//     position: 0,
//     cash: 1000,
// }

// let player2 = {
//     name: 'Igor',
//     color: 'red',
//     position: 0,
//     cash: 1000,
// }

// let player3 = {
//     name: 'Adalberto',
//     color: 'blue',
//     position: 0,
//     cash: 1000,
// }

// //Turn of player1
// //Jogar um dado que retorna um número entre 1 e 6
// let dice = 1 + Math.floor(6 * Math.random());

// //Mudar a posição do meu jogador entre 0 e 15 somando o resultado do dado
// player1.position = (player1.position + dice) % board.length;

// //Atualizar o dinheiro do jogador
// player1.cash += board[player1.position];

// //Condição de game over

// if (player1.cash <= 0) {
//     console.log(`Game over for ${player1.name}`);
// };

// //Turn of player2
// //Jogar um dado que retorna um número entre 1 e 6
// dice = 1 + Math.floor(6 * Math.random());

// //Mudar a posição do meu jogador entre 0 e 15 somando o resultado do dado
// player2.position = (player2.position + dice) % board.length;

// //Atualizar o dinheiro do jogador
// player2.cash += board[player2.position];

// //Condição de game over

// if (player2.cash <= 0) {
//     console.log(`Game over for ${player2.name}`);
// };

// //Turn of player3
// //Jogar um dado que retorna um número entre 1 e 6
// dice = 1 + Math.floor(6 * Math.random());

// //Mudar a posição do meu jogador entre 0 e 15 somando o resultado do dado
// player3.position = (player3.position + dice) % board.length;

// //Atualizar o dinheiro do jogador
// player3.cash += board[player3.position];

// //Condição de game over

// if (player3.cash <= 0) {
//     console.log(`Game over for ${player3.name}`);
// };

// //display info
// console.log(player1);
// console.log(player2);
// console.log(player3);

//Usig Methods

let player1 = {
  name: "Erico",
  color: "white",
  position: 0,
  cash: 1000,

  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % board.length;
    this.cash += board[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
};

let player2 = {
  name: "Igor",
  color: "red",
  position: 0,
  cash: 1000,

  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % board.length;
    this.cash += board[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
};

let player3 = {
  name: "Adalberto",
  color: "blue",
  position: 0,
  cash: 1000,

  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % board.length;
    this.cash += board[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
};

//Turno 1
player1.move();
player2.move();
player3.move();

//Turno 2
player1.move();
player2.move();
player3.move();

//Turno 3
player1.move();
player2.move();
player3.move();

//display info
// console.log(player1);
// console.log(player2);
// console.log(player3);

const chuck = {
  firstName: "Chuck",
  lastName: "Norris",
  birthDate: new Date("1940-03-10"),
  jokes: [
    "Chuck Norris counted to infinity... Twice.",
    "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis",
  ],
  displayInfo() {
    console.log(`My name is ${this.firstName} ${this.lastName}, and i have ${this.jokes.length} jokes.`);
  },
  getAge(){
    console.log(`${this.firstName} ${this.lastName} age is ${(new Date().getFullYear() - this.birthDate.getFullYear())}`);
  },
  addJoke(joke) {
    this.jokes.push(joke);
  },
  getRandomJoke() {
    let randomNumber = Math.floor(Math.random() * this.jokes.length);
    return this.jokes[randomNumber];
  },
};

chuck.addJoke('What Goes trought Chuck Norris enemie\'s head? His shoe');
console.log(chuck.getRandomJoke());