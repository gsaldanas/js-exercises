import rl from "readline-sync";
let getal1 = rl.question("Geef een eerste getal in: ");
getal1 = parseInt(getal1);
console.log(getal1);
let getal2 = rl.question("Geef een tweede getal in: ");
getal2 = parseInt(getal2);
console.log(getal2);
let berekening = rl.question("Welke berekening wil je maken? (+,-,/,*)");
console.log(berekening);
let operator = berekening.charAt(0);
let result;

switch (operator) {
  case "+":
    result = calcSum(getal1, getal2);
    break;
  case "-":
    result = calcSub(getal1, getal2);
    break;
  case "/":
    result = calcDiv(getal1, getal2);
    break;
  case "*":
    result = calcMul(getal1, getal2);
    break;
  default:
    result = "Gelieve een operator te kiezen";
    break;
}
console.log("De uitkomst is : " + result);
///calc functions
//sum
function calcSum(getal1, getal2) {
  return getal1 + getal2;
}
//subtract
function calcSub(getal1, getal2) {
  return getal1 - getal2;
}
//multiply
function calcMul(getal1, getal2) {
  return getal1 * getal2;
}
//divide
function calcDiv(getal1, getal2) {
  if (getal2 === 0) {
    return "Delen door 0 is niet toegestaan";
  }
  return getal1 / getal2;
}

//switch statement
