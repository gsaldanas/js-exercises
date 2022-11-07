import rl from "readline-sync";
//variables aanmaken
let puntenLijst = [];
let aantalPunten = 0;
let average = 0;
let percentage = 0;
let sumGrades = 0;
const maxScore = 20;
const geslaagd = 10;

let ingevenPunten = rl.question("Hoeveel punten wil je ingeven? ");
ingevenPunten = parseInt(ingevenPunten);

for (let i = 1; i <= ingevenPunten; i++) {
  let grades = rl.question("Grade " + i + " : ");
  puntenLijst.push(grades);
  console.log(grades);
}
aantalPunten = ingevenPunten;
//fails checken met filter
let fails = puntenLijst.filter(function (e) {
  return e < geslaagd;
});
//average sum
for (const grade of puntenLijst) {
  sumGrades += parseInt(grade);
}
//bereken average
// average = sumGrades / aantalPunten;

//het gemiddelde uitgedrukt in percentage van elk behaald score
// percentage = (average * 100) / maxScore;

//function calc average
function calcAverage(sum, aantal) {
  return sum / aantal;
}
//function percentage
function calcPercentage(getal, total) {
  return (getal * 100) / total;
}
//main
average = calcAverage(sumGrades, aantalPunten);
percentage = calcPercentage(average, maxScore);

//ouput
console.log("Punten: " + puntenLijst);
console.log("Fails: " + fails.length);
console.log("Average: " + average);
console.log("Percentage: " + percentage + "%");
