//import the modules files
import Player from "./modules/Player.js";
import Game from "./modules/Game.js";
//import npm readline-sync
import rl from "readline-sync";

//variables
//questions
// let amountPlayers = rl.question("How many players do you wish to enter? ");
// amountPlayers = parseInt(amountPlayers);
//array of players made
let generatedPlayers = [];
//true condintion for the while loop
let createPlayer = true;
let teamA = [];
let teamB = [];
//matches
let matches = [
  "Anderlecht",
  "Brugge",
  "Gent",
  "Mechelen",
  "Lierse",
  "Union",
  "Antwerpen",
  "Genk",
  "Leuven",
  "Standard",
];

function generateRandomMatch(matches) {
  let aantalTeams = matches.length;
  let randomIndex = Math.floor(Math.random() * aantalTeams);
  return matches[randomIndex];
}
function generateRandomGoal() {
  return Math.floor(Math.random() * 6);
}
function generateRandomDatum() {
  let dag = Math.floor(Math.random() * 31);
  let maand = Math.floor(Math.random() * 11);
  return `${dag}-${maand}-2022`;
}
console.log(generateRandomMatch(matches));
console.log(generateRandomDatum());
console.log(generateRandomGoal());

const speler1 = new Player("Gaspar", 60, 29);
speler1.displayPlayer();

const game = new Game(
  generateRandomMatch(matches),
  generateRandomDatum(),
  generateRandomGoal()
);
game.displayGame();
// //functions
function inputPlayer() {
  let namePlayer = rl.question("Give the name of the player ");
  let ratingPlayer = rl.question("Give the player his rating ");
  let agePlayer = rl.question("Give the age of the player");
  let objPlayer = new Player(namePlayer, ratingPlayer, agePlayer);
  return objPlayer;
}
// // function inputPlayer2() {
// //   let namePlayer = rl.question("Give the name of the player ");
// //   let ratingPlayer = rl.question("Give the player his rating ");
// //   let objPlayer = {
// //     name: namePlayer,
// //     rating: ratingPlayer,
// //   };
// //   return objPlayer;
// // }
function displayPlayers(players) {
  //   for (const key in players) {
  //     players[key].displayPlayer();
  //   }
  //   for (let i = 0; i < players.length; i++) {
  //     players[i].displayPlayer();
  //   }
  players.forEach((e) => {
    e.displayPlayer();
  });
}
// // function displayPlayers2(players) {
// //   players.forEach((e) => {
// //     console.log(e.name + " Rating: " + e.rating);
// //   });
// // }
// // //sort array
function sortPlayers(players) {
  return players.sort(function (a, b) {
    return a.rating - b.rating;
  });
}
// //create teams
function createTeams(players) {
  for (let i = 0; i < players.length; i++) {
    if (i % 2 === 0) {
      teamA.push(players[i]);
    } else {
      teamB.push(players[i]);
    }
  }
}
// //main
while (createPlayer) {
  let player = inputPlayer();
  generatedPlayers.push(player);
  if (generatedPlayers.length === amountPlayers) {
    createPlayer = false;
  }
}
// console.log(generatedPlayers);
// createTeams(generatedPlayers);
// console.log("----team A---- ");
// displayPlayers(teamA);
// console.log("----team B---- ");
// displayPlayers(teamB);

// // // displayPlayers(generatedPlayers);
// // displayPlayers(generatedPlayers);
// // sortPlayers(generatedPlayers);
// // console.log(generatedPlayers.reverse());
// // displayPlayers(generatedPlayers);

// // const player1 = new Player("Ruben", 80);
// // player1.displayPlayer();
