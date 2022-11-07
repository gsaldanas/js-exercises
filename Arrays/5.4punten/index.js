//variables aanmaken
const grades = [16, 12, 16, 7, 17, 14, 9, 8, 18, 12];
const aantalVakken = grades.length;
let average = 0;
let percentage = 0;
let sumGrades = 0;
const maxScore = 20;
const geslaagd = 10;
//fails checken met filter
let fails = grades.filter(function (e) {
  return e < geslaagd;
});
//average sum
for (const grade of grades) {
  sumGrades += grade;
}
//bereken average
average = sumGrades / aantalVakken;

//het gemiddelde uitgedrukt in percentage van elk behaald score
percentage = (average * 100) / maxScore;

//ouput
console.log("Fails: " + fails.length);
console.log("Average: " + average);
console.log("Percentage: " + percentage + "%");
