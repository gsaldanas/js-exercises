//sum of array with reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersCalc = numbers.reduce(function (acc, e) {
  return acc + e;
}, 0);

console.log("De som is " + numbersCalc);
