import randomColor from "randomcolor";
function Todo(todoName, urgency = "low", color = randomColor()) {
  this.id = Math.random().toString(36).substring(2);
  //this.id = updateCounter();
  this.name = todoName;
  this.checked = false;
  this.created = new Date();
  this.updated = null;
  this.urgency = urgency;
  this.color = color;
}
// //update id met een counter
// let counter = 0;
// function updateCounter() {
//   counter++;
//   return counter;
// }

//change the name of a todo
Todo.prototype.setName = function (newName) {
  this.name = newName;
  this.updated = new Date();
};
//check a todo
// Todo.prototype.setChecked = function (value) {
//   this.checked = value;
//   this.updated = new Date();
// };
//check a todo
Todo.prototype.setChecked = function () {
  this.checked = true;
  this.updated = new Date();
};
export default Todo;
