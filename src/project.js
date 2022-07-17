import toDoItem from "./todoitem.js";
import ToDoItem from "./todoitem.js"


export default class Project {
  constructor(title) {
    (this.title = title), (this.items = []);
  }

  addItem(title, discription, due, notes){
    this.items.push(new toDoItem(title, discription, due, notes));
  }
}
