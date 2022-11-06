import rl from "readline-sync";
let kolommen = rl.question("Hoeveel kolommen wil je genereren?");
kolommen = parseInt(kolommen);
let rijen = rl.question("Hoeveel rijen wens je te generen?");
rijen = parseInt(rijen);
let row = "";
//for loop generate kolommen en rasters
for (let i = 0; i < rijen; i++) {
  //generate  result
  //const result = i "*";
  //console.log(`${result}`);
  for (let j = 0; j < kolommen; j++) {
    //console.log(i + ", " + j);
    row = row + "*";
  }
  console.log(row);
  row = "";
}
