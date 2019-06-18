export default class Project {

  constructor(title) {
    this.title = title;
    this.toDos = [];
    this.id = Project.id + (new Date());
    Project.id++;
  }

}

Project.id = 0;