const numbers = [
  [2, 3, 5],
  [6, 7, 9],
  [10, 11, 12],
];

//main
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  let sumRow = 0;
  //console.log(numbers[i]);
  for (let j = 0; j < numbers[i].length; j++) {
    // console.log(numbers[i][j]);
    sumRow += numbers[i][j];
    sum += numbers[i][j];
  }
  console.log("de totale som per rij is: " + sumRow);
}
console.log("total:" + sum);
console.log(numbers[1][2]);

const sumArrays = numbers.reduce(function (acc, e) {
  let sum = 0;
  sum = e.reduce(function (acc2, e2) {
    console.log(sum);
    return acc2 + e2;
  });

  return acc + sum;
}, 0);
console.log(sumArrays);
