const teBetalenBedrag = 264;
let aantalBriefjes = Math.round(teBetalenBedrag / 50);
const nogTeBetalen = teBetalenBedrag % 50;
let wisselgeld = 0;
if (nogTeBetalen !== 0) {
  aantalBriefjes += 1;
  wisselgeld = 50 - nogTeBetalen;
}

console.log("Te betalen bedrag " + teBetalenBedrag);
console.log("je hebt " + aantalBriefjes + " briefjes van 50 nodig");
console.log("je wisselgeld is dan " + wisselgeld + " euro");
