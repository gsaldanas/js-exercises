import rl from "readline-sync";
let kolommen = rl.question("Hoeveel kolommen wil je genereren?");
kolommen = parseInt(kolommen);
let rijen = rl.question("Hoeveel rijen wens je te generen?");
rijen = parseInt(rijen);

let i = 0;
let j = 0;
let printSter = "";

while (i < kolommen) {
  i++;
  while (j < rijen) {
    j++;
    //console.log("zoveel kolommen " + i + " keer geprint");
    printSter += "*";
  }
  console.log(printSter);
  //   printSter = "";
  //   j = 0;
}
