const voornamen = ["Gaspar", "Ruben", "Ivan", "Nadia", "Django"];
const achternamen = ["Ghost", "Madman", "Killa", "Core", "Bull"];
const leeftijd = [29, 29, 57, 33, 8];
console.log(voornamen.length);
console.log(achternamen.length);
let printNamen = "";
//controle of arrays dezelfde length hebben
if (voornamen.length === achternamen.length) {
  console.log("De lengte van de arrays zijn gelijk");
  // print namen uit
  for (let i = 0; i < voornamen.length; i++) {
    console.log(voornamen[i] + " " + achternamen[i] + " age " + leeftijd[i]);
  }
} else {
  console.log("Gelieve de arrays dezelfde lengte te geven");
}
