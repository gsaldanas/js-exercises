//calculating the bmi
const weight = 69;
const height = 175;
let result = weight / Math.pow(height / 100, 2);
result = Math.round(result);
console.log("Your BMI is :" + result);

let maxWeight = 25 * Math.pow(height / 100, 2);
console.log(
  "Your recommended maximum weight: " + maxWeight + " for a healhty lifestyle"
);
