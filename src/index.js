import DOM from './DOM';
import Project from './project';
import Todo from './todo';
import getSampleData from './getSampleData';

const App = (function() {

  const state = {
    projects: [],
    currentProject: null,
    currentTodo: null,
  };

  function setInitState() {
    const projects = localStorage.getItem('projects') ? 
                      JSON.parse(localStorage.getItem('projects')) : 
                      getSampleData();

    state.projects = projects;
    state.currentProject = state.projects[0];
  }

  function setEventListeners() {
    const addProjectLink = document.getElementById('addProject');

    addProjectLink.addEventListener('click', addProjectHandle);
  }

  //=============== Projects
  function addProjectHandle(e) {
    e.preventDefault();

    const projectTitle = prompt('Please enter project title');

    if (projectTitle) {
      const project = new Project(projectTitle);
      state.projects.push(project);
      DOM.addProject(project, projectClickHandler, projectRemoveHandler);
    } else {
      alert('Cann\'t be blank!');
    }
  }

  function projectClickHandler(e) {
    e.preventDefault();
    const projectId = e.target.dataset.projectId;
    state.currentProject = state.projects.find(project => project.id == projectId);
    DOM.setActiveProject(e.target);
  }

  function projectRemoveHandler(e) {
    e.preventDefault();
    e.stopPropagation();

    const confirmationCopy = 'Are you sure, you want to remove the project? (All TODOs in it will be removed)';
    if (confirm(confirmationCopy)) {
      const projectId = e.target.parentElement.dataset.projectId;
      state.projects = state.projects.filter(project => project.id !== projectId);
      state.currentProject = null;
      DOM.removeProject(e.target.parentElement);
    }
  }

  //=========== ToDos
  function toDoClickHandler(e) {
    e.preventDefault();
    const toDoId = e.target.dataset.toDoId;
    state.currentTodo = state.currentProject.toDos.find(toDo => toDo.id == toDoId);
    
    DOM.setActiveToDo(e.target);
  }


  function init() {
    setInitState();
    setEventListeners();
    DOM.renderProjects(state.projects, projectClickHandler, projectRemoveHandler);
    DOM.renderToDos(state.currentProject, toDoClickHandler);
  }

  return {
    init,
  }
})();

App.init();