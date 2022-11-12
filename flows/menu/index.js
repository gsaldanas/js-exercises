//import readline-sync
import rl from "readline-sync";
//variables
let condition = true;
const menu = ["START F1", "START F2", "START F3", "START F4", "STOP"];

//functions
const showMenu = function () {
  let counter = 1;
  menu.forEach((element, index) => {
    console.log(`[${counter}]-->${element}`);
    counter++;
  });
};
const progamF1 = function () {
  console.log("ik ben F1");
};
const progamF2 = function () {
  console.log("ik ben F2");
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
  console.log(input);
  switch (input) {
    case "1":
      progamF1();
      break;
    case "2":
      progamF2();
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
      console.log(`Choose the correct input`);
  }
}
