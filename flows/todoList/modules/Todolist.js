function Todolist(name, color = "black") {
  this.name = name;
  this.color = color;
  this.todos = [];
}
//set name of the todolist
Todolist.prototype.setName = function (newName) {
  this.name = newName;
};
//push todos in todolist
Todolist.prototype.addTodo = function (todo) {
  this.todos.push(todo);
};
//remove todo from a todolist
Todolist.prototype.removeTodo = function (todo) {
  let index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
};
//remove todo by id
Todolist.prototype.removeTodoById = function (todo) {
  let id = todo.id;
  let index = this.todos.findIndex(function (oneTodo) {
    return oneTodo.id == id;
  });
  console.log(index);
  if (index == -1) {
    console.log("allready deleted");
  } else {
    this.todos.splice(index, 1);
  }
};

Todolist.prototype.emptyTodoList = function () {
  //dt is beter de array referentie blijft behouden
  this.todos.length = 0;
};

export default Todolist;
