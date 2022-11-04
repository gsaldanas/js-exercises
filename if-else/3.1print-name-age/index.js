const voornaam = "gaspar";
const leeftijd = 29;
//make voornaam capitalize
const capVoornaam = voornaam
  .charAt(0)
  .toUpperCase()
  .concat(voornaam.substring(1));
//console.log(capVoornaam);
const achternaam = "Saldana Sandoval";
//make achternaam capitalize
const capActhernaam = achternaam.split(" ");
console.log(capActhernaam);
//for loop om door de array te gaan
for (let i = 0; i < capActhernaam.length; i++) {
  capActhernaam[i] =
    capActhernaam[i].charAt(0).toUpperCase() + capActhernaam[i].slice(1);
}
const updateCapAchternaam = capActhernaam.join(" ");
//console.log(updateCapAchternaam);
const printData = `u bent ${capVoornaam} ${updateCapAchternaam} en u bent ${leeftijd} jaar our`;
console.log(printData);
