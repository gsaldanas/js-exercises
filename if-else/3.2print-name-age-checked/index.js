//capName
function capStr(txt) {
  //   const arrName = txt.split(" ");
  //   return arrName;
  return txt.charAt(0).toUpperCase().concat(txt.substring(1));
}
//cap achterNaam
function capActhernaam(txt) {
  const arrAchternaam = txt.split(" ");
  let capAchternaam = "";
  for (let i = 0; i < arrAchternaam.length; i++) {
    // capActhernaam += capName(arrAchternaam[i]);
    capAchternaam += capStr(arrAchternaam[i]) + " ";
  }
  return capAchternaam;
}

//console.log(capActhernaam("gaspar saldana"));
// //check name and age function
function checkNameAge(voornaam, achternaam, leeftijd) {
  let result = "";
  let message = "";
  if (voornaam === "" || achternaam === "") {
    message = "vul zowel voornaam als achternaam in! ";
  }
  if (!leeftijd) {
    leeftijd = "";
    message = "vul een leeftijd in!";
  }
  if (leeftijd < 12 || leeftijd > 60) {
    message += " u behoort niet tot de gezochte leeftijdsklasse! ";
  }
  result = `Wat is uw voornaam? ${capStr(voornaam)}\n
  Wat is uw achternaam? ${capActhernaam(achternaam)}\n
  Wat is uw leeftijd? ${leeftijd}\n
  u bent ${capStr(voornaam)} ${capActhernaam(
    achternaam
  )} en u bent ${leeftijd} jaar oud !!

`;
  return result + message;
  //   //return capStr(voornaam) + " " + capActhernaam(achternaam) + " " + leeftijd;
  //   return `Wat is uw voornaam? ${capStr(voornaam)}\n
  //          Wat is uw achternaam? ${capActhernaam(achternaam)}\n
  //          Wat is uw leeftijd? ${leeftijd}\n
  //          u bent${capStr(voornaam)} ${capActhernaam(
  //     achternaam
  //   )} en u bent ${leeftijd} jaar oud !!

  //   `;
}

console.log(checkNameAge("Gaspar", "saldana sandoval"));
