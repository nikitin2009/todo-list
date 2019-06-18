export default class Todo {

  constructor( {title, description, dueDate, priority} ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = Todo.id + (new Date());
    Todo.id++;
  }

}

Todo.id = 0;
