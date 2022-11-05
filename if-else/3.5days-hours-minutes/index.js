//import npm package
import rl from "readline-sync";
//variables
let huidigAantalUur = rl.question("Geef het huidige uur: ");
huidigAantalUur = parseInt(huidigAantalUur);
console.log("huidig uur: " + huidigAantalUur);

let huidigAantalMinuten = rl.question("Geef de huidige minuten: ");
huidigAantalMinuten = parseInt(huidigAantalMinuten);
console.log("huidig minuten: " + huidigAantalMinuten);

let addedHour = rl.question("Geef de toegevoegd uren ");
addedHour = parseInt(addedHour);
console.log("toegevoegde uren: " + addedHour);

let addedMinutes = rl.question("Geef de toegevoegde minuten: ");
addedMinutes = parseInt(addedMinutes);
console.log("Toegevoegde minuten: " + addedMinutes);

let totalUren = huidigAantalUur + addedHour;
let totalMinutes = huidigAantalMinuten + addedMinutes;
console.log(totalUren);
console.log(totalMinutes);

let uurBij = Math.round(addedMinutes / 60);
let minutenBij = 0;
let message = "";

if (addedMinutes > 60) {
  minutenBij = addedMinutes % 60;
  totalMinutes = minutenBij;
}
if (uurBij > 0) {
  totalUren += uurBij;
}
if (totalUren > 24) {
  let dagenErbij = Math.round(totalUren / 24);
  totalUren = totalUren % 24;
  message = `Let op: Dat is het uur over ${dagenErbij} dag(en)!
  `;
} else {
  message = `Dat is nog dezelfde dag
    `;
}

console.log("minuten erbij: " + minutenBij);
console.log("uren erbij: " + uurBij);
console.log("nieuw uur " + totalUren);
console.log("nieuw minuten " + totalMinutes);
console.log(
  `over ${addedHour} uur en ${addedMinutes} minuten is het ${totalUren}uur en ${totalMinutes} minuten`
);

console.log(message);
