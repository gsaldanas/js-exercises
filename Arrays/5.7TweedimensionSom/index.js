let spreadsheet = [
  [100, 104, 105],
  [144, 110, 109],
  [105, 107, 111],
];
// sum numbers with reduce and applying with map for every array
let sumRowNumbers = spreadsheet.map(function (e) {
  return e.reduce(function (acc, e) {
    return acc + e;
  }, 0);
});
console.log(sumRowNumbers);
// /*console log prints*/
// let printSpreadSheet = spreadsheet.forEach((element) => {
//   console.log(element);
//   //   console.log(element[0]);
//   //   console.log(element[1]);
//   //   console.log(element[2]);
// });

// // const sumPunten = spreadsheet
// //   .reduce(function (acc, e) {
// //     return acc.concat(e);
// //   }, 0)
// //   .reduce(function (acc, e) {
// //     return acc + e;
// //   }, 0);

// const result = spreadsheet
//   .reduce(function (acc, e) {
//     return acc.concat(e);
//   }) // flatten array
//   .reduce(function (acc, e) {
//     return acc + e;
//   }); // sum

// console.log(result);
