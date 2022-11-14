//importing files
import Todo from "./modules/Todo.js";
import Todolist from "./modules/Todolist.js";

const todo1 = new Todo("Javascript", "high");
const todo2 = new Todo("CSS", "low");
const todo3 = new Todo("PHP", "medium");

const todoLijst = new Todolist("coderen", "blue");
todoLijst.addTodo(todo1);
todoLijst.addTodo(todo2);
todoLijst.addTodo(todo3);

todoLijst.removeTodoById(todo3);
console.log(todoLijst);
todoLijst.removeTodoById(todo3);
console.log(todoLijst);
// console.log(todo1);
// console.log(todo2);
// console.log(todo3);
// todo3.setChecked("done");
// console.log(todo3);
// console.log(todoLijst);
