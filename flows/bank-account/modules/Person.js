function Person(fname, lname, age, bday, id = createId()) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.bday = bday;
  this.id = id;
}

const createId = function () {
  return Math.random().toString(36).substring(2);
};
Person.prototype.displayPerson = function () {
  console.log(
    `Firstname:${this.fname} Lastname:${this.lname} Age:${this.age} Bday:${this.bday}`
  );
};
export default Person;
