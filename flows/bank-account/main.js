//import readline-sync
import rl from "readline-sync";
import Person from "./modules/Person.js";
import Clients from "./modules/Clients.js";
import BankAccount from "./modules/BankAccount.js";

//variables
const person1 = new Person("Ruben", "Salsan", 29, "30-09-93");
const rkPerson1 = new BankAccount(person1);
const person2 = new Person("Gaspar", "Alonso", 34, "39-10-43");
const rkPerson2 = new BankAccount(person2);
const clientListBank = new Clients();

clientListBank.AddBankAccount(rkPerson1);
clientListBank.AddBankAccount(rkPerson2);

console.log(person1);
console.log(person2);
console.log(clientListBank);
person1.displayPerson();
person2.displayPerson();
rkPerson1.displayAccount();
rkPerson2.displayAccount();
