import Project from './project';
import Todo from './todo';

export default function getSampleData() {
  const projects = [new Project('Default project')];
  const regularTodo = new Todo({
    title: 'A regular task',
    description: 'Lorem ipsum dolor sit amet consectetur',
    dueDate: new Date(2019, 7, 31),
    priority: 'regular'
  });
  const expiredTodo = new Todo({
    title: 'Expired task',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla!',
    dueDate: new Date(2019, 0, 1),
    priority: 'regular'
  });
  const highPriorityTodoCompleted = new Todo({
    title: 'High priority (completed)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla!',
    dueDate: new Date(2019, 7, 31),
    priority: 'high'
  });
  highPriorityTodoCompleted.completed = true;
  const lowPriorityTodo = new Todo({
    title: 'Low priority',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla!',
    dueDate: new Date(2019, 7, 31),
    priority: 'low'
  });
  const noDueDateTodo = new Todo({
    title: 'No date',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolorum nulla!',
    dueDate: null,
    priority: 'low'
  });

  projects[0].toDos.push(regularTodo, expiredTodo, highPriorityTodoCompleted, lowPriorityTodo, noDueDateTodo);

  return projects;
}