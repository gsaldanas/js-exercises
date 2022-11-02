const voornaam = "gaspar";
//console.log(voornaam);
const achternaam = "saldana sandoval";
const updateVn = voornaam.substring(1, 0).toUpperCase().concat(".");
const updateAn = achternaam.split(" ");
let capName = "";
updateAn.forEach(function (e) {
  let temp = e.split("");
  temp.splice(0, 1, e.charAt(0).toUpperCase());
  console.log(temp);
  capName += temp.join("").concat(" ");
});
console.log(capName);
console.log(
  ` De naam "${voornaam} ${achternaam}" zal worden afgekapt als ${updateVn} ${capName}`
);
