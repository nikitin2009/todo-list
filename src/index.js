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

  function updateLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(state.projects));
  }

  function setInitState() {
    const projects = localStorage.getItem('projects') ? 
                      JSON.parse(localStorage.getItem('projects')) : 
                      getSampleData();

    state.projects = projects;
    state.currentProject = state.projects[0];
    state.currentTodo = state.currentProject.toDos[0];
  }

  function setEventListeners() {
    const addProjectLink = document.getElementById('addProject');

    addProjectLink.addEventListener('click', addProjectHandler);
  }

  //=============== Projects
  function addProjectHandler(e) {
    e.preventDefault();

    const projectTitle = prompt('Please enter project title');

    if (projectTitle) {
      const project = new Project(projectTitle);
      state.projects.push(project);
      state.currentProject = project;
      updateLocalStorage();

      const projectElement = DOM.addProject(project, projectClickHandler, projectRemoveHandler);
      DOM.setActiveProject(projectElement);
      DOM.renderToDos(state.currentProject, toDoClickHandler);
    } else {
      alert('Cann\'t be blank!');
    }
  }

  function projectClickHandler(e) {
    e.preventDefault();
    const projectId = e.target.dataset.projectId;
    state.currentProject = state.projects.find(project => project.id == projectId);
    DOM.setActiveProject(e.target);
    DOM.renderToDos(state.currentProject, toDoClickHandler);
  }

  function projectRemoveHandler(e) {
    e.preventDefault();
    e.stopPropagation();

    const confirmationCopy = 'Are you sure, you want to remove the project? (All TODOs in it will be removed)';
    if (confirm(confirmationCopy)) {
      const projectsListNode = e.target.parentNode.parentNode;
      const projectId = e.target.parentElement.dataset.projectId;
      state.projects = state.projects.filter(project => project.id !== projectId);
      updateLocalStorage();
      DOM.removeProject(e.target.parentElement);

      const newCurrentProject = state.projects[0];
      
      if (newCurrentProject) {
        state.currentProject = newCurrentProject;
        
        DOM.setActiveProject(projectsListNode.children[0]);
        DOM.renderToDos(newCurrentProject, toDoClickHandler);
      } else {
        state.currentProject = null;
      }
    }
  }

  //=========== ToDos
  function toDoClickHandler(e) {
    e.preventDefault();
    const toDoId = e.target.dataset.toDoId;
    state.currentTodo = state.currentProject.toDos.find(toDo => toDo.id == toDoId);
    
    DOM.setActiveToDo(e.target, state.currentTodo);
  }


  function init() {
    setInitState();
    setEventListeners();
    DOM.renderProjects(state.projects, projectClickHandler, projectRemoveHandler);
    DOM.renderToDos(state.currentProject, toDoClickHandler);
    DOM.renderSingleToDo(state.currentTodo);
  }

  return {
    init,
  }
})();

App.init();