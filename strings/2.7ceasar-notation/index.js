let result = [];
let alphabet = [];
function createABC() {
  for (let i = 97; i < 123; i++) {
    alphabet.push(String.fromCharCode(i));
  }
}
function myCeaserNotation(inputStr) {
  let temp = inputStr.split("");
  temp.forEach((e) => {
    let rot13 = convertRot13(e);
    result.push(rot13);
  });
}
function convertRot13(letter) {
  let index = alphabet.indexOf(letter);
  if (index === -1) {
    return " ";
  }

  let pos = index - 13;

  if (pos < 0) {
    index = 26 + pos;
  } else {
    index = pos;
  }
  return alphabet[index];
}
createABC();
console.log("wr urog qrmr brsravat tbrq hvgtribreq");
myCeaserNotation("wr urog qrmr brsravat tbrq hvgtribreq");
let enCrypted = result.join("");
console.log(enCrypted);
