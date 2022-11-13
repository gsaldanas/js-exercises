function Clients() {
  this.bankAccount = [];
}

Clients.prototype.AddBankAccount = function (bankAccount) {
  this.bankAccount.push(bankAccount);
};

export default Clients;
