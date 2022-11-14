function Coffee() {
  this.id = Math.random().toString(36).substring(2);
  this.type = generateRandomCoffeeType();
  this.sugar = generateRandomSugar();
  this.milk = generateRandomMilk();
}
//randomCoffeeType
function generateRandomCoffeeType() {
  let arrCoffeeTypes = [
    "| Black      |",
    "| Cappuccino |",
    "| Americano  |",
    "| Espresso   |",
    "| Latte      |",
  ];
  return arrCoffeeTypes[Math.floor(Math.random() * 5)];
}
//randomCoffeeType
function generateRandomSugar() {
  let arrSugar = [" none   |", " low    |", " medium |", " high   |"];
  return arrSugar[Math.floor(Math.random() * 4)];
}
//randomMilk
function generateRandomMilk() {
  let arrMilk = ["None", "low", "medium", "high", "oat", "almond"];
  return arrMilk[Math.floor(Math.random() * 6)];
}
//display coffee
Coffee.prototype.displayCoffee = function () {
  console.log(`Type:${this.type} Sugar:${this.sugar} Milk:${this.milk}`);
};
Coffee.prototype.amountOfTotalTypesCoffee = function () {};
export default Coffee;
