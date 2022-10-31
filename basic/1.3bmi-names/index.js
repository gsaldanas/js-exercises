//calculating the bmi with more persons
function bmiCalc(name, weight, height) {
  let result = weight / Math.pow(height / 100, 2);
  console.log("The BMI of " + name + " is: " + Math.round(result));
}
bmiCalc("Gaspar", 69, 175);
bmiCalc("Djanjo", 30, 80);
