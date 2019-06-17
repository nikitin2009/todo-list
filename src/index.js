import DOM from './DOM';
import Project from './project';

const App = (function() {

  const state = {
    projects: [],
    currentProject: null,
  };

  function setInitState() {
    state.projects = [new Project('Default project')];
    state.currentProject = state.projects[0];
  }

  function setEventListeners() {
    const addProjectLink = document.getElementById('addProject');

    addProjectLink.addEventListener('click', addProjectHandle);
  }

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


  function init() {
    setInitState();
    setEventListeners();
    DOM.renderProjects(state.projects, projectClickHandler, projectRemoveHandler);
  }

  return {
    init,
  }
})();

App.init();