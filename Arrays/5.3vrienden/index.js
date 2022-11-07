import rl from "readline-sync";
let vrienden = rl.question("Hoeveel vrienden wens je in te geven?" + " ");
vrienden = parseInt(vrienden);
let arrayVrienden = [];
//array vrienden vullen
for (let i = 1; i <= vrienden; i++) {
  let naamVriend = rl.question("Geef vriend " + i + " in ");
  arrayVrienden.push(naamVriend);
}

//array printen
for (let i = 0; i < arrayVrienden.length; i++) {
  console.log("- " + arrayVrienden[i]);
}
//for of tryout
for (const naam of arrayVrienden) {
  console.log(naam);
}
