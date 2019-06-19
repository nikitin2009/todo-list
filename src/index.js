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

  const singleToDoClickHandlers = {
    completeButtonHandler: function(e) {
      e.preventDefault();
      state.currentTodo.completed = !state.currentTodo.completed;
      updateLocalStorage();

      DOM.renderToDos(state.currentProject, toDoClickHandler, addToDoClickHandler, singleToDoClickHandlers);
      DOM.setActiveToDo(state.currentTodo, singleToDoClickHandlers);
    },
    deleteButtonHandler: function(e) {
      e.preventDefault();
      const confirmationCopy = 'Are you sure, you want to remove the TODO?';
      if (confirm(confirmationCopy)) {
        state.currentProject.toDos = state.currentProject.toDos.filter(toDo => toDo.id !== state.currentTodo.id);
        state.currentTodo = state.currentProject.toDos[0];
        updateLocalStorage();

        DOM.renderToDos(state.currentProject, toDoClickHandler, addToDoClickHandler, singleToDoClickHandlers);
      }
    },
    editFormSubmitHandler: function(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      
      for (let [key, value] of formData.entries()) {
        if (key === 'dueDate') {
          value = value ? new Date(value.split('/').reverse().join(' ')) : null;
        }
        state.currentTodo[key] = value;
      }

      updateLocalStorage();
      alert('Updated!');

      DOM.renderToDos(state.currentProject, toDoClickHandler, addToDoClickHandler, singleToDoClickHandlers);
      DOM.setActiveToDo(state.currentTodo, singleToDoClickHandlers);
    },
  };

  function updateLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(state.projects));
  }

  function setInitState() {
    const projects = localStorage.getItem('projects') ? 
                      JSON.parse(localStorage.getItem('projects')) : 
                      getSampleData();

    state.projects = projects;
    state.currentProject = state.projects[0] || null;
    state.currentTodo = state.currentProject ? state.currentProject.toDos[0] : null;
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
      DOM.renderToDos(state.currentProject, toDoClickHandler, addToDoClickHandler, singleToDoClickHandlers);
    } else {
      alert('Cann\'t be blank!');
    }
  }

  function projectClickHandler(e) {
    e.preventDefault();
    const projectId = e.target.dataset.projectId;
    state.currentProject = state.projects.find(project => project.id == projectId);
    DOM.setActiveProject(e.target);
    DOM.renderToDos(state.currentProject, toDoClickHandler, addToDoClickHandler, singleToDoClickHandlers);
  }

  function projectRemoveHandler(e) {
    e.preventDefault();
    e.stopPropagation();

    const confirmationCopy = 'Are you sure, you want to remove the project? (All TODOs in it will be removed)';
    if (confirm(confirmationCopy)) {
      const projectsListNode = e.target.parentNode.parentNode;
      const projectId = e.target.parentElement.dataset.projectId;
      state.projects = state.projects.filter(project => project.id != projectId);
      updateLocalStorage();
      DOM.removeProject(e.target.parentElement);

      const newCurrentProject = state.projects[0];
      
      if (newCurrentProject) {
        state.currentProject = newCurrentProject;
        
        DOM.setActiveProject(projectsListNode.children[0]);
        DOM.renderToDos(newCurrentProject, toDoClickHandler, addToDoClickHandler,ngleToDoClickHandlers);
      } else {
        state.currentProject = null;
        DOM.emptyScreen();
      }
    }
  }

  //=========== ToDos
  function toDoClickHandler(e) {
    e.preventDefault();
    const toDoId = e.target.dataset.toDoId;
    state.currentTodo = state.currentProject.toDos.find(toDo => toDo.id == toDoId);
    
    DOM.setActiveToDo(state.currentTodo, singleToDoClickHandlers);
  }


  function init() {
    setInitState();
    setEventListeners();
    if (state.projects.length > 0)DOM.renderProjects(state.projects, projectClickHandler, projectRemoveHandler);    
    if (state.currentProject) DOM.renderToDos(state.currentProject, toDoClickHandler, addToDoClickHandler, singleToDoClickHandlers);
    if (state.currentTodo) DOM.renderSingleToDo(state.currentTodo, singleToDoClickHandlers);
  }

  function addToDoClickHandler(e) {
    e.preventDefault();
    
    const toDo = new Todo({

    });
  }

  return {
    init,
  }
})();

App.init();