//import readline-sync
import rl from "readline-sync";
//variables
let condition = true;
const menu = ["Add name", "Display names", "START F3", "START F4", "STOP"];
const names = [];

//functions
const showMenu = function () {
  let counter = 1;
  menu.forEach((element, index) => {
    console.log(`[${counter}]-->${element}`);
    counter++;
  });
};
const inputNames = function () {
  let namesPeople = rl.question("Enter a name: ");
  names.push(namesPeople);
};
const displayNames = function () {
  if (names.length === 0) {
    console.log("Not yet added names");
  }
  console.log("Display the names:");
  console.log("Number of names " + names.length);
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
};

const progamF3 = function () {
  console.log("ik ben F3");
};
const progamF4 = function () {
  console.log("ik ben F4");
};

//main
while (condition) {
  showMenu();
  let input = rl.prompt();
  switch (input) {
    case "1":
      inputNames();
      break;
    case "2":
      displayNames();
      break;
    case "3":
      progamF3();
      break;
    case "4":
      progamF4();
      break;
    case "5":
      condition = false;
      console.log(`You stopped the program`);
    default:
      console.log(`Plz choose the correct input`);
  }
}
