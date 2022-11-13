function BankAccount(person, startCapital = 0, rknummer = createRknummer()) {
  this.rknummer = rknummer;
  this.person = person;
  this.capital = startCapital;
  this.withdraws = [];
  this.deposit = [];
}

const createRknummer = function () {
  return Math.floor(Math.random() * 1000000);
};

BankAccount.prototype.displayAccount = function () {
  this.person.displayPerson();
  console.log(`bankNumber:${this.rknummer} Funds:${this.capital}`);
};
export default BankAccount;
