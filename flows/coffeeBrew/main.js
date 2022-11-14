//importing files
import Coffee from "./modules/Coffee.js";
import rl from "readline-sync";

let amountCoffee = rl.question("How many coffees do you wanna brew? ");
amountCoffee = parseInt(amountCoffee);

let coffees = [];
//simulate coffees
for (let i = 0; i < amountCoffee; i++) {
  coffees.push(new Coffee());
}
console.log("You brewed " + amountCoffee + " coffees ");
//display coffees
coffees.forEach(function (e) {
  e.displayCoffee();
});
let arrCoffeeTypes = [
  "| Black      |",
  "| Cappuccino |",
  "| Americano  |",
  "| Espresso   |",
  "| Latte      |",
];
//total coffees

function filterCoffeesTypes(coffeeType) {
  return coffees.filter(function (e) {
    return e.type == coffeeType;
  });
}

function aantalCoffees(arrTypes) {
  let aantal = [];
  arrTypes.forEach(function (coffeeType) {
    aantal.push(filterCoffeesTypes(coffeeType));
  });
  console.log(aantal);
  //   //display
  aantal.forEach(function (e, idx) {
    if (aantal[idx].length !== 0) {
      console.log(arrTypes[idx] + "---> " + aantal[idx].length);
    }
  });
}
aantalCoffees(arrCoffeeTypes);
