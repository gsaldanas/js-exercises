let jaren = 3;
let startBedrag = 100000;
let renteVoet = 2;
let startBezit = 100000;

for (let i = 0; i < jaren; i++) {
  let result = startBedrag * (renteVoet / 100);
  startBedrag += result;
  console.log(result);
}
console.log(startBedrag);
console.log(
  "Op een periode van " +
    jaren +
    " jaar " +
    "stijgt je startbezit van " +
    startBezit +
    " naar " +
    startBedrag +
    " bij een rentevoet van " +
    renteVoet +
    "%"
);
