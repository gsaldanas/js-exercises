import rl from "readline-sync";

let maaltafel = rl.question("Welke maaltafel wens je te genereren?");
maaltafel = parseInt(maaltafel);

let iteraries = rl.question("Hoeveel iteraties wens je weer te geven? ");
iteraries = parseInt(iteraries);

let resultaat = "";
//maak de tafel met een for loop
for (let i = 0; i <= iteraries; i++) {
  // toon het resultaat
  const result = i * maaltafel;
  resultaat += i * maaltafel + ", ";

  // print het resultaat uit;
  console.log(`${maaltafel} * ${i} = ${result}`);
}
console.log(result);
console.log(resultaat);
