import rl from "readline-sync";

let maaltafel = rl.question("Welke maaltafel wens je te genereren?");
maaltafel = parseInt(maaltafel);

let iteraries = rl.question("Hoeveel iteraties wens je weer te geven? ");
iteraries = parseInt(iteraries);

let i = 1;

//while voorbeeld
while (i <= iteraries) {
  console.log(i * maaltafel);
  i++;
}
