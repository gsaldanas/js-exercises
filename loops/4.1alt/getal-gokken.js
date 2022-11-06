import rl from "readline-sync";

const getal = Math.floor(Math.random() * 20) + 1;
console.log(getal);
let nogBezig = true;
let counter = 0;

while (nogBezig) {
  let i = rl.question("raad het getal " + " ");
  counter++;
  if (i == getal) {
    console.log("getal geraden");
    console.log("getal geraden na " + counter + " keer");
    nogBezig = false;
  }
  if (i < getal) {
    console.log("hoger");
  }
  if (i > getal) {
    console.log("lager!");
  }
}
