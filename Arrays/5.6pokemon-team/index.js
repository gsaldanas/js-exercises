import rl from "readline-sync";
let pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
];
let niewPokemonTeam = [];
let maakPokemonTeam = true;
//print pokemons uit
for (let i = 0; i < pokemons.length; i++) {
  console.log(pokemons.indexOf(pokemons[i]) + ". " + pokemons[i]);
}
//while loop pokemon team samen stellen
while (maakPokemonTeam) {
  let i = rl.question("Welke pokemon wil je in je team? [0-20]: ");
  if (i == "STOP") {
    maakPokemonTeam = false;
  } else {
    if (i > 20 || i == "") {
      console.log("Deze pokemon ken ik niet...");
    } else {
      niewPokemonTeam.push(pokemons[i]);
    }
  }
  //check if bigger > 20 or empty string
}
console.log(niewPokemonTeam);
//display niew pokemon team
console.log("Jouw pokemon team is: ");
for (let i = 0; i < niewPokemonTeam.length; i++) {
  console.log(
    niewPokemonTeam.indexOf(niewPokemonTeam[i]) + ". " + niewPokemonTeam[i]
  );
}
