//import the modules files
import Player from "./modules/Player.js";
//import npm readline-sync
import rl from "readline-sync";

//questions
let amountPlayers = rl.question("How many players do you wish to enter? ");
amountPlayers = parseInt(amountPlayers);
//array of players made
let generatedPlayers = [];
//true condintion for the while loop
let createPlayer = true;

let teamA = [];
let teamB = [];
let sortedPlayers = [];

while (createPlayer) {
  let player = inputPlayer();
  generatedPlayers.push(player);
  if (generatedPlayers.length === amountPlayers) {
    createPlayer = false;
  }
}

//function
function inputPlayer() {
  let namePlayer = rl.question("Give the name of the player ");
  let ratingPlayer = rl.question("Give the player his rating ");
  let objPlayer = new Player(namePlayer, ratingPlayer);
  return objPlayer;
}

// function inputPlayer2() {
//   let namePlayer = rl.question("Give the name of the player ");
//   let ratingPlayer = rl.question("Give the player his rating ");
//   let objPlayer = {
//     name: namePlayer,
//     rating: ratingPlayer,
//   };
//   return objPlayer;
// }
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

// function displayPlayers2(players) {
//   players.forEach((e) => {
//     console.log(e.name + " Rating: " + e.rating);
//   });
// }
// //sort array
function sortPlayers(players) {
  return players.sort(function (a, b) {
    return a.rating - b.rating;
  });
}
//create teams
function createTeams(players) {
  for (let i = 0; i < players.length; i++) {
    if (i % 2 === 0) {
      teamA.push(players[i]);
    } else {
      teamB.push(players[i]);
    }
  }
}
console.log(generatedPlayers);
createTeams(generatedPlayers);
console.log("----team A---- ");
displayPlayers(teamA);
console.log("----team B---- ");
displayPlayers(teamB);

// // displayPlayers(generatedPlayers);
// displayPlayers(generatedPlayers);
// sortPlayers(generatedPlayers);
// console.log(generatedPlayers.reverse());
// displayPlayers(generatedPlayers);

// const player1 = new Player("Ruben", 80);
// player1.displayPlayer();
